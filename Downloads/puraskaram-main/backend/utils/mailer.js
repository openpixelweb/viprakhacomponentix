const nodemailer = require("nodemailer");
const { secret } = require("../config/secret");

const transporter = nodemailer.createTransport({
  service: secret.email_service || undefined,
  host: secret.email_host || undefined,
  port: Number(secret.email_port || 587),
  secure: Number(secret.email_port) === 465,
  auth: {
    user: secret.email_user,
    pass: secret.email_pass,
  },
});

const sendMail = async ({ to, subject, html, text, cc, bcc }) => {
  return transporter.sendMail({
    from: `"Maathrey Wellness" <${secret.email_user}>`,
    to,
    cc,
    bcc,
    subject,
    html,
    text,
  });
};

module.exports = {
  transporter,
  sendMail,
};