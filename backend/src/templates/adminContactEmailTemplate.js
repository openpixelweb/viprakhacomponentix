import { escapeHtml } from "../utils/escapeHtml.js";

export const adminContactEmailTemplate = ({ name, email, subject, message }) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
    <div style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8; padding:30px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 18px rgba(0,0,0,0.08);">
              
              <tr>
                <td style="background:#f3f3f3; padding:25px 30px; text-align:center;">
                  <img
                    src="cid:viprakhaLogo"
                    alt="VIPRAKHA COMPONENTIX PVT LTD"
                    style="max-width:180px; height:auto; display:block; margin:0 auto 15px auto;"
                  />

                  <h2 style="margin:0; color:#ffffff; font-size:24px; font-weight:700;">
                    New Contact Form Message
                  </h2>

                  <p style="margin:8px 0 0 0; color:#dce8f7; font-size:14px;">
                    You received a new enquiry from the IPGS website.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:30px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                        <strong style="color:#071f3f; font-size:14px;">Name:</strong>
                        <p style="margin:6px 0 0 0; color:#333333; font-size:15px;">
                          ${safeName}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                        <strong style="color:#071f3f; font-size:14px;">Email:</strong>
                        <p style="margin:6px 0 0 0; color:#333333; font-size:15px;">
                          <a href="mailto:${safeEmail}" style="color:#0b65c2; text-decoration:none;">
                            ${safeEmail}
                          </a>
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                        <strong style="color:#071f3f; font-size:14px;">Subject:</strong>
                        <p style="margin:6px 0 0 0; color:#333333; font-size:15px;">
                          ${safeSubject}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:18px 0;">
                        <strong style="color:#071f3f; font-size:14px;">Message:</strong>
                        <div style="margin-top:10px; padding:18px; background:#f8fafc; border-left:4px solid #071f3f; border-radius:6px; color:#333333; font-size:15px; line-height:1.6;">
                          ${safeMessage}
                        </div>
                      </td>
                    </tr>
                  </table>

                  <div style="text-align:center; margin-top:25px;">
                    <a
                      href="mailto:${safeEmail}?subject=Re: ${safeSubject}"
                      style="display:inline-block; background:#071f3f; color:#ffffff; padding:12px 28px; border-radius:5px; text-decoration:none; font-size:15px; font-weight:bold;"
                    >
                      Reply to Customer
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="background:#f0f3f6; padding:18px 30px; text-align:center;">
                  <p style="margin:0; color:#666666; font-size:13px;">
                    This email was sent from the VIPRAKHA COMPONENTIX PVT LTD website contact form.
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