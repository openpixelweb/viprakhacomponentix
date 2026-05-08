const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { secret } = require("../config/secret");

const getBearerToken = (req) => {
  if (req.headers?.authorization?.startsWith("Bearer ")) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};

const buildVerifier = ({ cookieName } = {}) => async (req, res, next) => {
  try {
    const headerToken = getBearerToken(req);
    const cookieToken = cookieName ? req.cookies?.[cookieName] : (req.cookies?.mw_admin_auth || req.cookies?.mw_user_auth);
    const token = headerToken || cookieToken;

    if (!token) {
      return res.status(401).json({
        status: "fail",
        error: "You are not logged in",
      });
    }

    const decoded = await promisify(jwt.verify)(token, secret.token_secret);
    req.user = decoded;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      status: "fail",
      error: "Invalid token",
    });
  }
};

const verifyToken = buildVerifier();
const verifyUserToken = buildVerifier({ cookieName: "mw_user_auth" });
const verifyAdminToken = buildVerifier({ cookieName: "mw_admin_auth" });

module.exports = verifyToken;
module.exports.verifyToken = verifyToken;
module.exports.verifyUserToken = verifyUserToken;
module.exports.verifyAdminToken = verifyAdminToken;
