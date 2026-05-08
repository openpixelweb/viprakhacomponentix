const crypto = require("crypto");
const mongoose = require("mongoose");
const { secret } = require("../config/secret");
const ApiError = require("../errors/api-error");
const Order = require("../models/Order");
const Product = require("../models/Product");
const { sendMail } = require("../utils/mailer");
const {
  adminEmail,
  orderConfirmedUserEmail,
  orderConfirmedAdminEmail,
  paymentFailedUserEmail,
  paymentFailedAdminEmail,
  paymentCancelledUserEmail,
  paymentCancelledAdminEmail,
} = require("../utils/payment-emails");

const RAZORPAY_API_BASE_URL = "https://api.razorpay.com/v1";

const toNumber = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const roundMoney = (value) => Number(toNumber(value).toFixed(2));
const rupeesToPaise = (value) => Math.max(0, Math.round(toNumber(value) * 100));
const paiseToRupees = (value) => Number((toNumber(value) / 100).toFixed(2));

const getCandidateItems = (payload = {}) => {
  if (Array.isArray(payload.items)) return payload.items;
  if (Array.isArray(payload.cart)) return payload.cart;
  if (Array.isArray(payload.products)) return payload.products;
  return [];
};

const getEffectiveUnitPrice = (item = {}) => {
  const originalPrice = roundMoney(item?.originalPrice ?? item?.price ?? 0);
  const discount = Number(item?.discount || 0);

  if (discount > 0) {
    return roundMoney(originalPrice - (originalPrice * discount) / 100);
  }

  return roundMoney(item?.price ?? originalPrice);
};

const normalizeCartForStorage = (items = [], productMap = new Map()) => {
  return items.map((item) => {
    const productId = String(item?._id || item?.productId || item?.id || "").trim();
    const product = productMap.get(productId) || item;

    const originalPrice = roundMoney(product?.originalPrice ?? product?.price ?? 0);
    const discount = Number(product?.discount || item?.discount || 0);
    const price = getEffectiveUnitPrice(product);

    return {
      _id: item?._id || item?.productId || item?.id || null,
      productId: item?.productId || item?._id || item?.id || null,
      title: product?.title || item?.title || item?.name || "",
      image: product?.image || item?.image || item?.img || "",
      type: product?.type || item?.type || "",
      parent: product?.parent || item?.parent || "",
      originalPrice,
      discount,
      price,
      orderQuantity: Math.max(
        1,
        Number(item?.orderQuantity || item?.quantity || item?.qty || 1)
      ),
    };
  });
};

const getRazorpayAuthHeader = () => {
  const raw = `${secret.razorpay_key_id}:${secret.razorpay_key_secret}`;
  return `Basic ${Buffer.from(raw).toString("base64")}`;
};

const razorpayRequest = async (path, options = {}) => {
  const response = await fetch(`${RAZORPAY_API_BASE_URL}${path}`, {
    ...options,
    headers: {
      Authorization: getRazorpayAuthHeader(),
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      data?.error?.description ||
      data?.error?.reason ||
      data?.error?.code ||
      "Razorpay request failed";

    const error = new Error(message);
    error.statusCode = response.status;
    error.data = data;
    throw error;
  }

  return data;
};

const resolveAmount = async (payload = {}) => {
  const items = getCandidateItems(payload);
  const shippingPaise = rupeesToPaise(payload.shippingCost);
  const discountPaise = rupeesToPaise(payload.discount);

  if (items.length === 0) {
    const basePaise = rupeesToPaise(
      payload.subTotal ??
        payload.total ??
        payload.price ??
        payload.amount ??
        payload.totalAmount ??
        0
    );

    return Math.max(0, basePaise + shippingPaise - discountPaise);
  }

  const rawIds = items
    .map((item) => item.productId || item._id || item.id)
    .filter(Boolean)
    .map((id) => String(id).trim());

  const invalidIds = rawIds.filter((id) => !mongoose.Types.ObjectId.isValid(id));
  if (invalidIds.length > 0) {
    throw new ApiError(
      400,
      "Cart contains invalid product id. Please clear cart and add products again."
    );
  }

  const products = await Product.find({ _id: { $in: rawIds } }).select(
    "_id price originalPrice discount title image parent type"
  );
  const productMap = new Map(products.map((product) => [String(product._id), product]));

  let itemTotalPaise = 0;

  for (const item of items) {
    const productId = String(item.productId || item._id || item.id || "").trim();
    const quantity = Math.max(1, Number(item.quantity || item.qty || item.orderQuantity || 1));
    const product = productMap.get(productId);

    if (!product) {
      throw new ApiError(
        400,
        `Product not found for cart item ${productId}. Please refresh cart and try again.`
      );
    }

    const unitPricePaise = rupeesToPaise(getEffectiveUnitPrice(product));
    itemTotalPaise += unitPricePaise * quantity;
  }

  return Math.max(0, itemTotalPaise + shippingPaise - discountPaise);
};

const verifyRazorpaySignature = ({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
}) => {
  const generatedSignature = crypto
    .createHmac("sha256", secret.razorpay_key_secret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  return generatedSignature === razorpay_signature;
};

const fetchVerifiedPayment = async (paymentId) => {
  return razorpayRequest(`/payments/${paymentId}`);
};

const buildTrustedOrderPayload = async (payload = {}, user, payment) => {
  const cartItems = getCandidateItems(payload);

  const idsToLoad = cartItems
    .map((item) => item.productId || item._id || item.id)
    .filter(Boolean)
    .map((id) => String(id).trim());

  const products = idsToLoad.length
    ? await Product.find({ _id: { $in: idsToLoad } }).select(
        "_id title image type parent price originalPrice discount"
      )
    : [];

  const productMap = new Map(products.map((p) => [String(p._id), p]));
  const storedCart = normalizeCartForStorage(cartItems, productMap);

  const subTotal = roundMoney(
    storedCart.reduce(
      (sum, item) => sum + roundMoney(item.price * item.orderQuantity),
      0
    )
  );

  const onlineMethod = payment?.method ? `Razorpay (${payment.method})` : "Razorpay";

  return {
    user: user._id,
    name: payload.name,
    address: payload.address,
    email: payload.email,
    contact: payload.contact,
    city: payload.city,
    country: payload.country,
    zipCode: payload.zipCode,
    shippingOption: payload.shippingOption || "",
    cart: storedCart,

    subTotal,
    shippingCost: roundMoney(payload.shippingCost),
    discount: roundMoney(payload.discount),
    totalAmount: paiseToRupees(payment.amount),

    paymentProvider: "razorpay",
    paymentMethod: onlineMethod,
    paymentOrderId: payment.order_id,
    paymentId: payment.id,
    paymentSignature: payload.razorpay_signature,
    paymentStatus: payment.status,
    currency: String(payment.currency || "INR").toUpperCase(),
    paymentMeta: {
      entity: payment.entity,
      method: payment.method,
      amount: payment.amount,
      currency: payment.currency,
      status: payment.status,
      order_id: payment.order_id,
      contact: payment.contact,
      email: payment.email,
      captured: payment.captured,
      notes: payment.notes,
      created_at: payment.created_at,
      description: payment.description,
      fee: payment.fee,
      tax: payment.tax,
      international: payment.international,
    },

    status: "pending",
  };
};

const verifyPaidOrder = async (payload = {}, user) => {
  const razorpayOrderId = payload.razorpay_order_id;
  const razorpayPaymentId = payload.razorpay_payment_id;
  const razorpaySignature = payload.razorpay_signature;

  if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
    return { ok: false, message: "Missing Razorpay payment details" };
  }

  if (!user?._id) {
    return { ok: false, message: "Authenticated user is missing" };
  }

  if (
    !verifyRazorpaySignature({
      razorpay_order_id: razorpayOrderId,
      razorpay_payment_id: razorpayPaymentId,
      razorpay_signature: razorpaySignature,
    })
  ) {
    return { ok: false, message: "Invalid Razorpay signature" };
  }

  const [payment, expectedAmount] = await Promise.all([
    fetchVerifiedPayment(razorpayPaymentId),
    resolveAmount(payload),
  ]);

  if (payment.status !== "captured" && payment.status !== "authorized") {
    return { ok: false, message: "Payment has not completed" };
  }

  if (payment.order_id !== razorpayOrderId) {
    return { ok: false, message: "Payment order mismatch" };
  }

  if (Number(payment.amount) !== Number(expectedAmount)) {
    return { ok: false, message: "Payment amount mismatch" };
  }

  if (String(payment.currency || "").toUpperCase() !== "INR") {
    return { ok: false, message: "Unexpected payment currency" };
  }

  if (payment?.notes?.userId && payment.notes.userId !== String(user._id)) {
    return { ok: false, message: "Payment does not belong to the authenticated user" };
  }

  return { ok: true, payment };
};

const sendOrderSuccessEmails = async (order) => {
  try {
    await Promise.allSettled([
      sendMail({
        to: order.email,
        subject: `Order Confirmed - ${order.invoice}`,
      html: orderConfirmedUserEmail({
  name: order.name,
  invoice: order.invoice,
  totalAmount: order.totalAmount,
  city: order.city,
  country: order.country,
  cart: order.cart,
}),
      }),
      sendMail({
        to: adminEmail,
        subject: `New Order Received - ${order.invoice}`,
      html: orderConfirmedAdminEmail({
  name: order.name,
  invoice: order.invoice,
  totalAmount: order.totalAmount,
  email: order.email,
  contact: order.contact,
  city: order.city,
  country: order.country,
  cart: order.cart,
}),
      }),
    ]);
  } catch (error) {
    console.error("sendOrderSuccessEmails error:", error);
  }
};

module.exports.createRazorpayOrder = async (req, res, next) => {
  try {
    const amount = await resolveAmount(req.body);

    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Unable to calculate a valid payment amount",
      });
    }

    const receipt = `rcpt_${Date.now()}_${String(req.user?._id || "guest").slice(-6)}`.slice(0, 40);

    const order = await razorpayRequest("/orders", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency: "INR",
        receipt,
        notes: {
          userId: String(req.user?._id || ""),
          email: String(req.user?.email || ""),
        },
      }),
    });

    return res.status(200).json({
      success: true,
      order,
      keyId: secret.razorpay_key_id,
    });
  } catch (error) {
    console.log("createRazorpayOrder error:", error);
    return next(error);
  }
};

module.exports.addOrder = async (req, res, next) => {
  try {
    const orderItems = req.body;
    const verification = await verifyPaidOrder(orderItems, req.user);

    if (!verification.ok) {
      return res.status(400).send({
        success: false,
        message: verification.message,
      });
    }

    const existingOrder = await Order.findOne({ paymentId: verification.payment.id });
    if (existingOrder) {
      return res.status(200).send({
        success: true,
        message: "Order already exists for this payment",
        order: existingOrder,
        duplicate: true,
      });
    }

    const trustedOrderData = await buildTrustedOrderPayload(
      orderItems,
      req.user,
      verification.payment
    );

    const order = await new Order(trustedOrderData).save();

    await sendOrderSuccessEmails(order);

    return res.status(200).send({
      success: true,
      message: "Order added successfully",
      order,
    });
  } catch (error) {
    if (error?.code === 11000) {
      const existingOrder = await Order.findOne({
        paymentId: req.body?.razorpay_payment_id,
      }).catch(() => null);

      if (existingOrder) {
        return res.status(200).send({
          success: true,
          message: "Order already exists for this payment",
          order: existingOrder,
          duplicate: true,
        });
      }
    }

    console.log("addOrder error:", error);
    return next(error);
  }
};

module.exports.paymentStatusEvent = async (req, res, next) => {
  try {
    const { status, reason, orderInfo = {}, gatewayOrderId } = req.body || {};
    const name = orderInfo?.name || req.user?.name || "Customer";
    const email = orderInfo?.email || req.user?.email || "";

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required",
      });
    }

    if (status === "failed") {
      await Promise.allSettled([
        email
          ? sendMail({
              to: email,
              subject: "Payment Failed - Maathrey Wellness",
             html: paymentFailedUserEmail({
  name,
  reason,
  city: orderInfo?.city,
  country: orderInfo?.country,
  cart: orderInfo?.cart || [],
}),
            })
          : Promise.resolve(),
        sendMail({
          to: adminEmail,
          subject: "Payment Failed - Maathrey Wellness",
        html: paymentFailedAdminEmail({
  name,
  email,
  contact: orderInfo?.contact,
  reason: `${reason || "-"}${gatewayOrderId ? ` (Order: ${gatewayOrderId})` : ""}`,
  city: orderInfo?.city,
  country: orderInfo?.country,
  cart: orderInfo?.cart || [],
}),
        }),
      ]);
    }

    if (status === "cancelled") {
      await Promise.allSettled([
        email
          ? sendMail({
              to: email,
              subject: "Payment Cancelled - Maathrey Wellness",
             html: paymentCancelledUserEmail({
  name,
  reason,
  city: orderInfo?.city,
  country: orderInfo?.country,
  cart: orderInfo?.cart || [],
}),
            })
          : Promise.resolve(),
        sendMail({
          to: adminEmail,
          subject: "Payment Cancelled - Maathrey Wellness",
         html: paymentCancelledAdminEmail({
  name,
  email,
  contact: orderInfo?.contact,
  reason: `${reason || "-"}${gatewayOrderId ? ` (Order: ${gatewayOrderId})` : ""}`,
  city: orderInfo?.city,
  country: orderInfo?.country,
  cart: orderInfo?.cart || [],
}),
        }),
      ]);
    }

    return res.status(200).json({
      success: true,
      message: "Payment status event processed",
    });
  } catch (error) {
    console.log("paymentStatusEvent error:", error);
    return next(error);
  }
};

module.exports.razorpayWebhook = async (req, res, next) => {
  try {
    const secretKey = secret.razorpay_webhook_secret;
    if (!secretKey) {
      return res.status(200).json({ success: true, skipped: true });
    }

    const signature = req.headers["x-razorpay-signature"];
    const body = JSON.stringify(req.body || {});
    const expected = crypto.createHmac("sha256", secretKey).update(body).digest("hex");

    if (signature !== expected) {
      return res.status(400).json({ success: false, message: "Invalid webhook signature" });
    }

    const event = req.body?.event;
    const payment = req.body?.payload?.payment?.entity;

    if (event === "payment.captured" && payment?.id) {
      await Order.updateOne(
        { paymentId: payment.id },
        { $set: { paymentStatus: payment.status, paymentMeta: payment } }
      );
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return next(error);
  }
};

exports.getSingleOrder = async (req, res, next) => {
  try {
    const orderItem = await Order.findById(req.params.id).populate("user");
    return res.status(200).json(orderItem);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

exports.updateOrderStatus = async (req, res, next) => {
  const newStatus = req.body.status;
  try {
    await Order.updateOne(
      { _id: req.params.id },
      { $set: { status: newStatus } },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const orderItems = await Order.find({}).sort({ createdAt: -1 }).populate("user");
    return res.status(200).json({
      success: true,
      data: orderItems,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};