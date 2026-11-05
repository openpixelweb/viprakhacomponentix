import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  adminCareerTemplate,
  careerThankYouTemplate,
} from "../templates/emailTemplates.js";
import { getMailConfig } from "../utils/mailer.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logoPath = path.resolve(__dirname, "../../public/viprakha-logo.png");
const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const allowedMimeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export const submitCareerApplication = async (req, res) => {
  try {
    const data = {
      jobTitle: String(req.body?.jobTitle || "").trim(),
      fullName: String(req.body?.fullName || "").trim(),
      email: String(req.body?.email || "").trim(),
      contactNumber: String(req.body?.contactNumber || "").trim(),
      highestDegree: String(req.body?.highestDegree || "").trim(),
      totalExperience: String(req.body?.totalExperience || "").trim(),
      currentLocation: String(req.body?.currentLocation || "").trim(),
      message: String(req.body?.message || "").trim(),
    };

    const required = [
      data.jobTitle,
      data.fullName,
      data.email,
      data.contactNumber,
      data.highestDegree,
      data.totalExperience,
      data.message,
    ];

    if (required.some((value) => !value)) {
      return res.status(400).json({ success: false, message: "Please fill all required fields." });
    }

    if (!validEmail(data.email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email address." });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Please upload your resume." });
    }

    if (!allowedMimeTypes.has(req.file.mimetype)) {
      return res.status(400).json({
        success: false,
        message: "Only PDF, DOC or DOCX resume files are allowed.",
      });
    }

    const mail = getMailConfig();
    const careerAdminEmail = process.env.CAREER_ADMIN_EMAIL || mail.adminEmail;
    const logo = { filename: "viprakha-logo.png", path: logoPath, cid: "viprakhaLogo" };

    const resume = {
      filename: req.file.originalname,
      content: req.file.buffer,
      contentType: req.file.mimetype,
    };

    res.json({
      success: true,
      message: "Thank you! Your application has been submitted successfully.",
    });

    setImmediate(async () => {
      try {
        await Promise.all([
          mail.transporter.sendMail({
            from: mail.from,
            to: careerAdminEmail,
            replyTo: data.email,
            subject: `New Job Application: ${data.jobTitle} - ${data.fullName}`,
            html: adminCareerTemplate(data),
            attachments: [logo, resume],
          }),
          mail.transporter.sendMail({
            from: mail.from,
            to: data.email,
            replyTo: careerAdminEmail,
            subject: `Application Received: ${data.jobTitle}`,
            html: careerThankYouTemplate(data),
            attachments: [logo],
          }),
        ]);
        console.log(`Career application emails sent successfully for ${data.email}.`);
      } catch (error) {
        console.error("BACKGROUND CAREER EMAIL ERROR:", error);
      }
    });
  } catch (error) {
    console.error("CAREER APPLICATION ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Your application could not be submitted. Please try again later.",
    });
  }
};
