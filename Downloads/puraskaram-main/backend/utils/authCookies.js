const { secret } = require("../config/secret");

const isProduction = process.env.NODE_ENV === "production";

const buildCookieOptions = () => ({
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
  domain: secret.cookie_domain || undefined,
  path: "/",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

const setAuthCookie = (res, token, userType = "user") => {
  const cookieName = userType === "admin" ? "mw_admin_auth" : "mw_user_auth";
  res.cookie(cookieName, token, buildCookieOptions());
};

const clearAuthCookie = (res, userType = "user") => {
  const cookieName = userType === "admin" ? "mw_admin_auth" : "mw_user_auth";
  res.clearCookie(cookieName, buildCookieOptions());
};

module.exports = {
  setAuthCookie,
  clearAuthCookie,
};
