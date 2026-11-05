import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  adminContactTemplate,
  contactThankYouTemplate,
} from "../templates/emailTemplates.js";
import { getMailConfig } from "../utils/mailer.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logoPath = path.resolve(__dirname, "../../public/viprakha-logo.png");
const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const sendContactMessage = async (req, res) => {
  try {
    const name = String(req.body?.name || "").trim();
    const email = String(req.body?.email || "").trim();
    const phone = String(req.body?.phone || "").trim();
    const message = String(req.body?.message || "").trim();

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    if (!validEmail(email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email address." });
    }

    const { transporter, from, adminEmail } = getMailConfig();
    const logo = { filename: "viprakha-logo.png", path: logoPath, cid: "viprakhaLogo" };

    res.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });

    setImmediate(async () => {
      try {
        await Promise.all([
          transporter.sendMail({
            from,
            to: adminEmail,
            replyTo: email,
            subject: `New Website Enquiry - ${name}`,
            html: adminContactTemplate({ name, email, phone, message }),
            attachments: [logo],
          }),
          transporter.sendMail({
            from,
            to: email,
            replyTo: adminEmail,
            subject: "Thank you for contacting Viprakha Componentix",
            html: contactThankYouTemplate({ name }),
            attachments: [logo],
          }),
        ]);
        console.log(`Contact emails sent successfully for ${email}.`);
      } catch (error) {
        console.error("BACKGROUND CONTACT EMAIL ERROR:", error);
      }
    });
  } catch (error) {
    console.error("CONTACT EMAIL ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Your message could not be sent. Please try again later.",
    });
  }
};
