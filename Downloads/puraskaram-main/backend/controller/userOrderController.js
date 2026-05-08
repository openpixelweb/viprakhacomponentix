const mongoose = require("mongoose");
const Order = require("../models/Order");
const dayjs = require("dayjs");

module.exports.getOrderByUser = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const pages = Number(page) || 1;
    const limits = Number(limit) || 8;
    const skip = (pages - 1) * limits;

    const totalDoc = await Order.countDocuments({ user: req.user._id });

    const totalPendingOrder = await Order.aggregate([
      { $match: { status: "pending", user: mongoose.Types.ObjectId(req.user._id) } },
      { $group: { _id: null, total: { $sum: "$totalAmount" }, count: { $sum: 1 } } },
    ]);

    const totalProcessingOrder = await Order.aggregate([
      { $match: { status: "processing", user: mongoose.Types.ObjectId(req.user._id) } },
      { $group: { _id: null, total: { $sum: "$totalAmount" }, count: { $sum: 1 } } },
    ]);

    const totalDeliveredOrder = await Order.aggregate([
      { $match: { status: "delivered", user: mongoose.Types.ObjectId(req.user._id) } },
      { $group: { _id: null, total: { $sum: "$totalAmount" }, count: { $sum: 1 } } },
    ]);

    const orders = await Order.find({ user: req.user._id }).sort({ _id: -1 }).skip(skip).limit(limits);

    res.send({
      orders,
      pending: totalPendingOrder.length === 0 ? 0 : totalPendingOrder[0].count,
      processing: totalProcessingOrder.length === 0 ? 0 : totalProcessingOrder[0].count,
      delivered: totalDeliveredOrder.length === 0 ? 0 : totalDeliveredOrder[0].count,
      totalDoc,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const isPrivileged = ["Admin", "Super Admin", "Manager", "CEO"].includes(req.user?.role);
    const isOwner = String(order.user) === String(req.user?._id);

    if (!isPrivileged && !isOwner) {
      return res.status(403).json({
        success: false,
        message: "You are not allowed to view this order",
      });
    }

    return res.status(200).json({
      success: true,
      order,
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};

exports.getDashboardAmount = async (req, res, next) => {
  try {
    const todayStart = dayjs().startOf("day");
    const todayEnd = dayjs().endOf("day");
    const yesterdayStart = dayjs().subtract(1, "day").startOf("day");
    const yesterdayEnd = dayjs().subtract(1, "day").endOf("day");
    const monthStart = dayjs().startOf("month");
    const monthEnd = dayjs().endOf("month");

    const todayOrders = await Order.find({
      createdAt: { $gte: todayStart.toDate(), $lte: todayEnd.toDate() },
    });

    let todayCashPaymentAmount = 0;
    let todayCardPaymentAmount = 0;

    todayOrders.forEach((order) => {
      if (order.paymentMethod === "COD") todayCashPaymentAmount += order.totalAmount;
      else if (order.paymentMethod === "Card") todayCardPaymentAmount += order.totalAmount;
    });

    const yesterdayOrders = await Order.find({
      createdAt: { $gte: yesterdayStart.toDate(), $lte: yesterdayEnd.toDate() },
    });

    let yesterDayCashPaymentAmount = 0;
    let yesterDayCardPaymentAmount = 0;

    yesterdayOrders.forEach((order) => {
      if (order.paymentMethod === "COD") yesterDayCashPaymentAmount += order.totalAmount;
      else if (order.paymentMethod === "Card") yesterDayCardPaymentAmount += order.totalAmount;
    });

    const monthlyOrders = await Order.find({
      createdAt: { $gte: monthStart.toDate(), $lte: monthEnd.toDate() },
    });

    const totalOrders = await Order.find();

    const todayOrderAmount = todayOrders.reduce((total, order) => total + order.totalAmount, 0);
    const yesterdayOrderAmount = yesterdayOrders.reduce((total, order) => total + order.totalAmount, 0);
    const monthlyOrderAmount = monthlyOrders.reduce((total, order) => total + order.totalAmount, 0);
    const totalOrderAmount = totalOrders.reduce((total, order) => total + order.totalAmount, 0);

    res.status(200).send({
      todayOrderAmount,
      yesterdayOrderAmount,
      monthlyOrderAmount,
      totalOrderAmount,
      todayCardPaymentAmount,
      todayCashPaymentAmount,
      yesterDayCardPaymentAmount,
      yesterDayCashPaymentAmount,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getSalesReport = async (req, res, next) => {
  try {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - 7);

    const salesOrderChartData = await Order.find({
      createdAt: { $gte: startOfWeek, $lte: new Date() },
    });

    const salesReport = salesOrderChartData.reduce((result, value) => {
      const onlyDate = value.createdAt.toISOString().split("T")[0];
      if (!result[onlyDate]) result[onlyDate] = { date: onlyDate, total: 0, order: 0 };
      result[onlyDate].total += value.totalAmount;
      result[onlyDate].order += 1;
      return result;
    }, {});

    res.status(200).json({ salesReport: Object.values(salesReport) });
  } catch (error) {
    next(error);
  }
};

exports.mostSellingCategory = async (req, res, next) => {
  try {
    const categoryData = await Order.aggregate([
      { $unwind: "$cart" },
      { $group: { _id: "$cart.parent", count: { $sum: "$cart.orderQuantity" } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]);

    res.status(200).json({ categoryData });
  } catch (error) {
    next(error);
  }
};

exports.getDashboardRecentOrder = async (req, res, next) => {
  try {
    const queryObject = { status: { $in: ["pending", "processing", "delivered", "cancel"] } };
    const totalDoc = await Order.countDocuments(queryObject);

    const orders = await Order.aggregate([
      { $match: queryObject },
      { $sort: { updatedAt: -1 } },
      { $project: { invoice: 1, createdAt: 1, updatedAt: 1, paymentMethod: 1, name: 1, user: 1, totalAmount: 1, status: 1 } },
    ]);

    res.status(200).send({ orders, totalOrder: totalDoc });
  } catch (error) {
    next(error);
  }
};
