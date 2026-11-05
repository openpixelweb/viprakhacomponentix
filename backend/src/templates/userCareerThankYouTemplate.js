import { escapeHtml } from "../utils/escapeHtml.js";

export const userCareerThankYouTemplate = ({ fullName, jobTitle }) => {
  const safeFullName = escapeHtml(fullName);
  const safeJobTitle = escapeHtml(jobTitle);

  return `
    <div style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8; padding:30px 0;">
        <tr>
          <td align="center">
            <table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 18px rgba(0,0,0,0.08);">

              <tr>
                <td style="background:#f3f3f3; padding:25px 30px; text-align:center;">
                  <img
                    src="cid:viprakhaLogo"
                    alt="VIPRAKHA COMPONENTIX PVT LTD"
                    style="max-width:180px; height:auto; display:block; margin:0 auto 15px auto;"
                  />
                  <h2 style="margin:0; color:#ffffff; font-size:24px; font-weight:700;">
                    Application Received
                  </h2>
                  <p style="margin:8px 0 0 0; color:#dce8f7; font-size:14px;">
                    Thank you for applying to VIPRAKHA COMPONENTIX PVT LTD.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:30px;">
                  <p style="margin:0 0 15px 0; color:#333333; font-size:16px;">
                    Dear ${safeFullName},
                  </p>

                  <p style="margin:0 0 15px 0; color:#333333; font-size:15px; line-height:1.6;">
                    Thank you for applying for the position of
                    <strong>${safeJobTitle}</strong> at <strong>VIPRAKHA COMPONENTIX PVT LTD</strong>.
                  </p>

                  <p style="margin:0 0 15px 0; color:#333333; font-size:15px; line-height:1.6;">
                    We have received your application successfully. Our recruitment team will review your profile and contact you if your experience matches our requirements.
                  </p>

                  <div style="margin:25px 0; padding:18px; background:#f8fafc; border-left:4px solid #071f3f; border-radius:6px;">
                    <p style="margin:0; color:#333333; font-size:15px; line-height:1.6;">
                      <strong>Applied Role:</strong> ${safeJobTitle}
                    </p>
                  </div>

                  <p style="margin:25px 0 0 0; color:#333333; font-size:15px;">
                    Regards,<br />
                    <strong>VIPRAKHA COMPONENTIX PVT LTD HR Team</strong>
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