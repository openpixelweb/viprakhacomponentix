import { escapeHtml } from "../utils/escapeHtml.js";

export const adminCareerEmailTemplate = ({
  jobTitle,
  fullName,
  email,
  phone,
  location,
  experience,
  linkedin,
  portfolio,
  message,
}) => {
  const safeJobTitle = escapeHtml(jobTitle);
  const safeFullName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeLocation = escapeHtml(location);
  const safeExperience = escapeHtml(experience);
  const safeLinkedin = escapeHtml(linkedin);
  const safePortfolio = escapeHtml(portfolio);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

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
                    New Job Application
                  </h2>
                  <p style="margin:8px 0 0 0; color:#dce8f7; font-size:14px;">
                    A candidate applied from the IPGS careers page.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:30px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                        <strong style="color:#071f3f;">Job Title:</strong>
                        <p style="margin:6px 0 0 0;">${safeJobTitle}</p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                        <strong style="color:#071f3f;">Candidate Name:</strong>
                        <p style="margin:6px 0 0 0;">${safeFullName}</p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                        <strong style="color:#071f3f;">Email:</strong>
                        <p style="margin:6px 0 0 0;">
                          <a href="mailto:${safeEmail}" style="color:#0b65c2; text-decoration:none;">
                            ${safeEmail}
                          </a>
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                        <strong style="color:#071f3f;">Phone:</strong>
                        <p style="margin:6px 0 0 0;">${safePhone}</p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                        <strong style="color:#071f3f;">Location:</strong>
                        <p style="margin:6px 0 0 0;">${safeLocation || "Not provided"}</p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                        <strong style="color:#071f3f;">Experience:</strong>
                        <p style="margin:6px 0 0 0;">${safeExperience}</p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                        <strong style="color:#071f3f;">LinkedIn:</strong>
                        <p style="margin:6px 0 0 0;">
                          ${safeLinkedin ? `<a href="${safeLinkedin}" style="color:#0b65c2;">${safeLinkedin}</a>` : "Not provided"}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                        <strong style="color:#071f3f;">Portfolio:</strong>
                        <p style="margin:6px 0 0 0;">
                          ${safePortfolio ? `<a href="${safePortfolio}" style="color:#0b65c2;">${safePortfolio}</a>` : "Not provided"}
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:18px 0;">
                        <strong style="color:#071f3f;">Cover Message:</strong>
                        <div style="margin-top:10px; padding:18px; background:#f8fafc; border-left:4px solid #071f3f; border-radius:6px; color:#333333; line-height:1.6;">
                          ${safeMessage}
                        </div>
                      </td>
                    </tr>
                  </table>

                  <div style="text-align:center; margin-top:25px;">
                    <a
                      href="mailto:${safeEmail}?subject=Re: Job Application - ${safeJobTitle}"
                      style="display:inline-block; background:#071f3f; color:#ffffff; padding:12px 28px; border-radius:5px; text-decoration:none; font-size:15px; font-weight:bold;"
                    >
                      Reply to Candidate
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="background:#f3f3f3; padding:18px 30px; text-align:center;">
                  <p style="margin:0; color:#666666; font-size:13px;">
                    Resume is attached with this email.
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