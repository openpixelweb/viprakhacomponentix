import nodemailer from "nodemailer";

export const getMailConfig = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("Email server is not configured.");
  }

  return {
    transporter: nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    }),
    from: `"${process.env.SMTP_FROM_NAME || "VIPRAKHA COMPONENTIX PVT LTD"}" <${
      process.env.SMTP_FROM_EMAIL || user
    }>`,
    adminEmail: process.env.ADMIN_EMAIL || "contact@viprakha.com",
  };
};
