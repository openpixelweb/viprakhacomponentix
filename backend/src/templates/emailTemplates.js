import { escapeHtml } from "../utils/escapeHtml.js";

const shell = (title, content) => `
<!doctype html>
<html>
  <body style="margin:0;background:#f4f6f8;font-family:Arial,sans-serif;color:#263238">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:28px 12px">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">
          <tr><td style="background:#f3f3f3;padding:22px 30px;text-align:center">
            <img src="cid:viprakhaLogo" alt="Viprakha Componentix" style="max-width:210px;max-height:70px">
          </td></tr>
          <tr><td style="padding:30px">
            <h2 style="margin:0 0 20px;color:#17233c">${escapeHtml(title)}</h2>
            ${content}
          </td></tr>
          <tr><td style="background:#f7f8fa;padding:16px 30px;font-size:12px;color:#667085;text-align:center">
            VIPRAKHA COMPONENTIX PVT LTD · contact@viprakha.com
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;

const row = (label, value) => `
  <tr>
    <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;width:34%">${escapeHtml(label)}</td>
    <td style="padding:9px 12px;border-bottom:1px solid #e5e7eb">${escapeHtml(value || "Not provided")}</td>
  </tr>`;

export const adminContactTemplate = ({ name, email, phone, message }) =>
  shell("New website enquiry", `
    <p>A new enquiry was submitted through the Viprakha website.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:8px">
      ${row("Name", name)}
      ${row("Email", email)}
      ${row("Phone", phone)}
      ${row("Message", message)}
    </table>`);

export const contactThankYouTemplate = ({ name }) =>
  shell("Thank you for contacting us", `
    <p>Hello ${escapeHtml(name)},</p>
    <p>We have received your enquiry. Our team will review your message and contact you shortly.</p>
    <p style="margin-top:24px">Regards,<br><strong>Viprakha Componentix Pvt Ltd</strong></p>`);

export const adminCareerTemplate = (data) =>
  shell(`New application: ${data.jobTitle}`, `
    <p>A candidate submitted a career application. The resume is attached to this email.</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:8px">
      ${row("Job Title", data.jobTitle)}
      ${row("Full Name", data.fullName)}
      ${row("Email", data.email)}
      ${row("Contact Number", data.contactNumber)}
      ${row("Highest Degree", data.highestDegree)}
      ${row("Experience", data.totalExperience)}
      ${row("Current Location", data.currentLocation)}
      ${row("Message", data.message)}
    </table>`);

export const careerThankYouTemplate = ({ fullName, jobTitle }) =>
  shell("Application received", `
    <p>Hello ${escapeHtml(fullName)},</p>
    <p>Thank you for applying for <strong>${escapeHtml(jobTitle)}</strong>. Our hiring team has received your application and resume.</p>
    <p>If your profile matches the position, our team will contact you.</p>
    <p style="margin-top:24px">Regards,<br><strong>Viprakha Componentix Pvt Ltd</strong></p>`);
