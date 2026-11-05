import { escapeHtml } from "../utils/escapeHtml.js";

export const userThankYouEmailTemplate = ({ name, subject, message }) => {
  const safeName = escapeHtml(name);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
    <div style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8; padding:30px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 18px rgba(0,0,0,0.08);">
              
              <tr>
                <td style="background:#071f3f; padding:25px 30px; text-align:center;">
                  <img
                    src="cid:viprakhaLogo"
                    alt="VIPRAKHA COMPONENTIX PVT LTD"
                    style="max-width:180px; height:auto; display:block; margin:0 auto 15px auto;"
                  />
                  <h2 style="margin:0; color:#ffffff; font-size:24px; font-weight:700;">
                    Thank You for Contacting Us
                  </h2>
                  <p style="margin:8px 0 0 0; color:#dce8f7; font-size:14px;">
                    We have received your message successfully.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:30px;">
                  <p style="margin:0 0 15px 0; color:#333333; font-size:16px;">
                    Dear ${safeName},
                  </p>

                  <p style="margin:0 0 15px 0; color:#333333; font-size:15px; line-height:1.6;">
                    Thank you for contacting <strong>VIPRAKHA COMPONENTIX PVT LTD</strong>.
                    We have received your enquiry and our team will get back to you soon.
                  </p>

                  <div style="margin:25px 0; padding:18px; background:#f8fafc; border-left:4px solid #071f3f; border-radius:6px;">
                    <p style="margin:0 0 8px 0; color:#071f3f; font-size:14px;">
                      <strong>Your Submitted Details</strong>
                    </p>
                    <p style="margin:6px 0; color:#333333; font-size:14px;">
                      <strong>Subject:</strong> ${safeSubject}
                    </p>
                    <p style="margin:6px 0; color:#333333; font-size:14px;">
                      <strong>Message:</strong><br />
                      ${safeMessage}
                    </p>
                  </div>

                  <p style="margin:0; color:#333333; font-size:15px; line-height:1.7;">
                    <strong>Email:</strong> info@ipgs.net<br />
                    <strong>Phone:</strong> +44(0) 118 206 6657
                  </p>

                  <p style="margin:25px 0 0 0; color:#333333; font-size:15px;">
                    Regards,<br />
                    <strong>VIPRAKHA COMPONENTIX PVT LTD Team</strong>
                  </p>
                </td>
              </tr>

              <tr>
                <td style="background:#f0f3f6; padding:18px 30px; text-align:center;">
                  <p style="margin:0; color:#666666; font-size:13px;">
                    This is an automatic confirmation email from VIPRAKHA COMPONENTIX PVT LTD.
                  </p>
                  <p style="margin:6px 0 0 0; color:#999999; font-size:12px;">
                    VIPRAKHA COMPONENTIX PVT LTD | contact@viprakha.com
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
};