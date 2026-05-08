const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { secret } = require("../config/secret");

module.exports.generateToken = (userInfo) => {
  const payload = {
    _id: userInfo._id,
    name: userInfo.name,
    email: userInfo.email,
    role: userInfo.role,
  };

  return jwt.sign(payload, secret.token_secret, {
    expiresIn: "7d",
  });
};

module.exports.generateRandomToken = () => crypto.randomBytes(32).toString("hex");
