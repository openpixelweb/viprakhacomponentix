const formatMoney = (value) => Number(value || 0).toFixed(2);

const adminEmail = process.env.ADMIN_ORDER_EMAIL || "info@maathrey.com";

const getLogoHtml = () => {
  const logo = process.env.PUBLIC_BRAND_LOGO_URL || "";
  if (!logo) return "";
  return `
    <div style="margin-bottom:18px;">
      <img src="${logo}" alt="Maathrey Wellness" style="max-width:180px;height:auto;display:block;" />
    </div>
  `;
};

const getStatusColor = (type) => {
  if (type === "success") {
    return {
      badgeBg: "#e7f8ef",
      badgeColor: "#15803d",
      titleColor: "#1e2a39",
      buttonBg: "linear-gradient(135deg,#119fd3 0%,#273d8f 100%)",
    };
  }

  if (type === "failed") {
    return {
      badgeBg: "#ffe8ee",
      badgeColor: "#e11d48",
      titleColor: "#1e2a39",
      buttonBg: "linear-gradient(135deg,#ef4444 0%,#be123c 100%)",
    };
  }

  return {
    badgeBg: "#fff5db",
    badgeColor: "#b45309",
    titleColor: "#1e2a39",
    buttonBg: "linear-gradient(135deg,#f59e0b 0%,#d97706 100%)",
  };
};

const getProductSummaryBlock = (order = {}) => {
  const cart = Array.isArray(order?.cart) ? order.cart : [];

  if (!cart.length) return "";

  const rows = cart
    .map((item) => {
      const quantity = Number(item?.orderQuantity || item?.quantity || 1);
      const image = item?.image || "";
      const title = item?.title || "Ordered Product";
      const price = formatMoney(item?.price || item?.originalPrice || 0);
      const lineTotal = formatMoney((item?.price || item?.originalPrice || 0) * quantity);

      return `
        <tr>
          <td valign="top" style="padding:14px 0;border-top:1px solid #e8f0f5;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
              <tr>
                ${
                  image
                    ? `<td width="92" valign="top" style="padding-right:14px;">
                        <img src="${image}" alt="${title}" style="width:78px;height:78px;object-fit:contain;border-radius:12px;background:#ffffff;border:1px solid #eef4f8;display:block;" />
                      </td>`
                    : ""
                }
                <td valign="top">
                  <div style="font-size:16px;line-height:1.45;color:#1e2a39;font-weight:700;margin-bottom:6px;">${title}</div>
                  <div style="font-size:14px;color:#667085;margin-bottom:4px;">Quantity: ${quantity}</div>
                  <div style="font-size:14px;color:#667085;margin-bottom:4px;">Unit Price: ₹${price}</div>
                  <div style="font-size:20px;color:#0f2544;font-weight:800;">₹${lineTotal}</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      `;
    })
    .join("");

  return `
    <div style="margin-top:22px;padding:18px;border:1px solid #d9eaf3;border-radius:18px;background:#f9fcfe;">
      <div style="font-size:12px;letter-spacing:.16em;color:#119fd3;font-weight:700;text-transform:uppercase;margin-bottom:10px;">
        Ordered Items
      </div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
        ${rows}
      </table>
    </div>
  `;
};

const wrapTemplate = ({
  type,
  badge,
  title,
  subtitle,
  body,
  ctaText,
  ctaUrl,
  orderInfoBlock = "",
  summaryBlock = "",
}) => {
  const theme = getStatusColor(type);

  return `
  <div style="margin:0;padding:0;background:#f4f8fb;font-family:Arial,sans-serif;color:#1e2a39;">
    <div style="max-width:760px;margin:0 auto;padding:28px 16px;">
      <div style="background:#ffffff;border:1px solid #d9eaf3;border-radius:28px;overflow:hidden;box-shadow:0 18px 45px rgba(17,159,211,0.08);">
        
        <div style="padding:30px 30px 22px;background:linear-gradient(180deg,#f7fbff 0%,#ffffff 100%);border-bottom:1px solid #e4f0f6;">
          ${getLogoHtml()}
          <span style="display:inline-block;padding:8px 14px;border-radius:999px;background:${theme.badgeBg};color:${theme.badgeColor};font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;">
            ${badge}
          </span>
          <h1 style="margin:18px 0 12px;font-size:34px;line-height:1.15;color:${theme.titleColor};font-weight:800;">
            ${title}
          </h1>
          <p style="margin:0;font-size:17px;line-height:1.7;color:#667085;">
            ${subtitle}
          </p>
        </div>

        <div style="padding:30px;">
          ${orderInfoBlock}
          ${body}
          ${summaryBlock}

          ${
            ctaUrl
              ? `
                <div style="margin-top:28px;">
                  <a href="${ctaUrl}" style="display:inline-block;padding:15px 24px;border-radius:999px;background:${theme.buttonBg};color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;">
                    ${ctaText}
                  </a>
                </div>
              `
              : ""
          }
        </div>
      </div>
    </div>
  </div>
  `;
};

const getOrderInfoPanel = ({
  customerName,
  location,
  invoice,
  totalAmount,
  extraLabel,
  extraValue,
}) => `
  <div style="margin-bottom:22px;padding:22px;border:1px solid #d9eaf3;border-radius:22px;background:#ffffff;">
    <div style="font-size:12px;letter-spacing:.16em;color:#119fd3;font-weight:700;text-transform:uppercase;margin-bottom:10px;">
      Order Details
    </div>
    <div style="font-size:28px;line-height:1.2;color:#1e2a39;font-weight:800;margin-bottom:8px;">
      ${customerName || "Customer"}
    </div>
    ${
      location
        ? `<div style="font-size:15px;color:#667085;margin-bottom:4px;">${location}</div>`
        : ""
    }
    ${
      invoice
        ? `<div style="font-size:15px;color:#1e2a39;margin-bottom:4px;"><strong>Invoice No:</strong> ${invoice}</div>`
        : ""
    }
    ${
      typeof totalAmount !== "undefined"
        ? `<div style="font-size:15px;color:#1e2a39;margin-bottom:4px;"><strong>Total:</strong> ₹${formatMoney(totalAmount)}</div>`
        : ""
    }
    ${
      extraLabel && extraValue
        ? `<div style="font-size:15px;color:#1e2a39;"><strong>${extraLabel}:</strong> ${extraValue}</div>`
        : ""
    }
  </div>
`;

const orderConfirmedUserEmail = ({
  name,
  invoice,
  totalAmount,
  city,
  country,
  cart = [],
}) => {
  const order = { cart };
  return wrapTemplate({
    type: "success",
    badge: "Order Confirmed",
    title: "Your order has been confirmed",
    subtitle:
      "Thank you for shopping with Maathrey Wellness. Your payment was successful and your order is now being processed.",
    orderInfoBlock: getOrderInfoPanel({
      customerName: name,
      location: [city, country].filter(Boolean).join(", "),
      invoice,
      totalAmount,
    }),
    body: `
      <div style="font-size:15px;line-height:1.8;color:#667085;">
        You will receive order updates as your package moves through processing and shipment.
      </div>
    `,
    summaryBlock: getProductSummaryBlock(order),
    ctaText: "View Your Order",
    ctaUrl: process.env.ORDER_SUCCESS_PAGE_URL || "",
  });
};

const orderConfirmedAdminEmail = ({
  name,
  invoice,
  totalAmount,
  email,
  contact,
  city,
  country,
  cart = [],
}) => {
  const order = { cart };
  return wrapTemplate({
    type: "success",
    badge: "New Order Received",
    title: "A new paid order has been placed",
    subtitle:
      "A customer has successfully completed payment and a new order has been created.",
    orderInfoBlock: getOrderInfoPanel({
      customerName: name,
      location: [city, country].filter(Boolean).join(", "),
      invoice,
      totalAmount,
      extraLabel: "Customer",
      extraValue: `${email || "-"} | ${contact || "-"}`,
    }),
    body: `
      <div style="font-size:15px;line-height:1.8;color:#667085;">
        Please review the order in admin and continue with fulfilment.
      </div>
    `,
    summaryBlock: getProductSummaryBlock(order),
    ctaText: "Open Admin",
    ctaUrl: process.env.ADMIN_ORDER_PAGE_URL || process.env.ADMIN_URL || "",
  });
};

const paymentFailedUserEmail = ({
  name,
  reason,
  city,
  country,
  cart = [],
}) => {
  const order = { cart };
  return wrapTemplate({
    type: "failed",
    badge: "Payment Failed",
    title: "Your payment could not be completed",
    subtitle:
      "Your order was not confirmed because the payment attempt failed. You can retry payment anytime.",
    orderInfoBlock: getOrderInfoPanel({
      customerName: name,
      location: [city, country].filter(Boolean).join(", "),
      extraLabel: "Reason",
      extraValue: reason || "Payment could not be completed",
    }),
    body: `
      <div style="font-size:15px;line-height:1.8;color:#667085;">
        If money was deducted and the order was not created, please wait a short while and contact support if needed.
      </div>
    `,
    summaryBlock: getProductSummaryBlock(order),
    ctaText: "Retry Payment",
    ctaUrl: process.env.CHECKOUT_PAGE_URL || "",
  });
};

const paymentFailedAdminEmail = ({
  name,
  email,
  contact,
  reason,
  city,
  country,
  cart = [],
}) => {
  const order = { cart };
  return wrapTemplate({
    type: "failed",
    badge: "Payment Failed",
    title: "A payment attempt failed",
    subtitle:
      "A customer attempted payment but the transaction did not complete successfully.",
    orderInfoBlock: getOrderInfoPanel({
      customerName: name || "Customer",
      location: [city, country].filter(Boolean).join(", "),
      extraLabel: "Customer",
      extraValue: `${email || "-"} | ${contact || "-"}`,
    }),
    body: `
      <div style="font-size:15px;line-height:1.8;color:#667085;">
        <strong>Failure Reason:</strong> ${reason || "-"}
      </div>
    `,
    summaryBlock: getProductSummaryBlock(order),
    ctaText: "Open Admin",
    ctaUrl: process.env.ADMIN_ORDER_PAGE_URL || process.env.ADMIN_URL || "",
  });
};

const paymentCancelledUserEmail = ({
  name,
  reason,
  city,
  country,
  cart = [],
}) => {
  const order = { cart };
  return wrapTemplate({
    type: "cancelled",
    badge: "Payment Cancelled",
    title: "Your payment was cancelled",
    subtitle:
      "You closed the payment window before checkout was completed. You can resume anytime.",
    orderInfoBlock: getOrderInfoPanel({
      customerName: name,
      location: [city, country].filter(Boolean).join(", "),
      extraLabel: "Status",
      extraValue: reason || "Payment was cancelled by user",
    }),
    body: `
      <div style="font-size:15px;line-height:1.8;color:#667085;">
        Your items are not confirmed yet. Continue checkout to complete your purchase.
      </div>
    `,
    summaryBlock: getProductSummaryBlock(order),
    ctaText: "Resume Checkout",
    ctaUrl: process.env.CHECKOUT_PAGE_URL || "",
  });
};

const paymentCancelledAdminEmail = ({
  name,
  email,
  contact,
  reason,
  city,
  country,
  cart = [],
}) => {
  const order = { cart };
  return wrapTemplate({
    type: "cancelled",
    badge: "Payment Cancelled",
    title: "A customer cancelled payment",
    subtitle:
      "The checkout session was dismissed before payment was completed.",
    orderInfoBlock: getOrderInfoPanel({
      customerName: name || "Customer",
      location: [city, country].filter(Boolean).join(", "),
      extraLabel: "Customer",
      extraValue: `${email || "-"} | ${contact || "-"}`,
    }),
    body: `
      <div style="font-size:15px;line-height:1.8;color:#667085;">
        <strong>Status:</strong> ${reason || "Payment cancelled by user"}
      </div>
    `,
    summaryBlock: getProductSummaryBlock(order),
    ctaText: "Open Admin",
    ctaUrl: process.env.ADMIN_ORDER_PAGE_URL || process.env.ADMIN_URL || "",
  });
};

module.exports = {
  adminEmail,
  orderConfirmedUserEmail,
  orderConfirmedAdminEmail,
  paymentFailedUserEmail,
  paymentFailedAdminEmail,
  paymentCancelledUserEmail,
  paymentCancelledAdminEmail,
};