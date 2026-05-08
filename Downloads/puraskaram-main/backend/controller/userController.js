const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");
const { generateToken, generateRandomToken } = require("../utils/token");
const { sendEmail } = require("../config/email");
const { secret } = require("../config/secret");
const { setAuthCookie, clearAuthCookie } = require("../utils/authCookies");

const googleClient = new OAuth2Client(secret.google_client_id);

const safeUser = (user) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
  phone: user.phone,
  address: user.address,
  bio: user.bio,
  imageURL: user.imageURL,
  status: user.status,
  googleId: user.googleId,
  authProvider: user.authProvider,
  contactNumber: user.contactNumber,
  shippingAddress: user.shippingAddress,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

module.exports.signup = async (req, res, next) => {
  try {
    const {
      name,
      email,
      password,
      contactNumber,
      shippingAddress,
      imageURL,
      phone,
      address,
      bio,
    } = req.body || {};

    const userEmail = String(email || "").toLowerCase();

    const user = await User.findOne({ email: userEmail });

    if (user) {
      return res.send({
        status: "failed",
        message: "Email already exists",
      });
    }

    const savedUser = await User.create({
      name,
      email: userEmail,
      password,
      contactNumber,
      shippingAddress,
      imageURL,
      phone,
      address,
      bio,
      role: "user",
      status: "inactive",
      authProvider: "local",
      googleId: null,
    });

    const token = savedUser.generateConfirmationToken();
    await savedUser.save({ validateBeforeSave: false });

    const mailData = {
      from: secret.email_user,
      to: `${userEmail}`,
      subject: "Verify Your Email",
      html: `<h2>Hello ${name}</h2>
        <p>Verify your email address to complete the signup and login into your <strong>Maathrey Wellness</strong> account.</p>
        <p>This link will expire in <strong>15 minutes</strong>.</p>
        <p style="margin-bottom:20px;">Click this link to activate your account</p>
        <a href="${secret.client_url}/email-verify/${token}" style="background:#22c55e;color:white;border:1px solid #22c55e; padding: 10px 15px; border-radius: 4px; text-decoration:none;">Verify Account</a>
        <p style="margin-top: 35px;">If you did not initiate this request, please contact us immediately at info@maathreypharmaceuticals.com</p>
        <p style="margin-bottom:0px;">Thank you</p>
        <strong>Maathrey Wellness Team</strong>`,
    };

    return sendEmail(mailData, res, "Please check your email to verify!");
  } catch (error) {
    console.log("sign up err", error);
    return next(error);
  }
};

module.exports.googleLogin = async (req, res) => {
  try {
    const { credential } = req.body || {};

    if (!credential) {
      return res.status(400).json({
        status: "fail",
        error: "Google credential is required",
      });
    }

    if (!secret.google_client_id) {
      return res.status(500).json({
        status: "fail",
        error: "Google Client ID is not configured",
      });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: secret.google_client_id,
    });

    const payload = ticket.getPayload();

    if (!payload || !payload.email || !payload.sub) {
      return res.status(401).json({
        status: "fail",
        error: "Invalid Google account data",
      });
    }

    const email = String(payload.email).toLowerCase();
    const googleId = payload.sub;

    let user = await User.findOne({
      $or: [{ email }, { googleId }],
    }).select("+password");

    if (!user) {
      user = await User.create({
        name: payload.name || email.split("@")[0],
        email,
        googleId,
        authProvider: "google",

        // Google never sends the Gmail password.
        // This random password is only because your User model requires password.
        password: crypto.randomBytes(32).toString("hex"),

        imageURL: payload.picture,
        role: "user",
        status: "active",
      });
    } else {
      user.googleId = user.googleId || googleId;
      user.authProvider = "google";

      if (!user.imageURL && payload.picture) {
        user.imageURL = payload.picture;
      }

      if (user.status !== "blocked") {
        user.status = "active";
      }

      await user.save({ validateBeforeSave: false });
    }

    if (user.status === "blocked") {
      return res.status(403).json({
        status: "fail",
        error: "Your account is blocked.",
      });
    }

    const token = generateToken(user);
    setAuthCookie(res, token, "user");

    return res.status(200).json({
      status: "success",
      message: "Successfully logged in with Google",
      data: {
        user: safeUser(user),
        accessToken: token,
      },
    });
  } catch (error) {
    console.log("google login error", error);

    return res.status(500).json({
      status: "fail",
      error: "Google login failed",
    });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please provide your credentials",
      });
    }

    const user = await User.findOne({
      email: String(email).toLowerCase(),
    }).select("+password");

    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: "No user found. Please create an account",
      });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Password is not correct",
      });
    }

    if (user.status !== "active") {
      return res.status(401).json({
        status: "fail",
        error: "Your account is not active yet.",
      });
    }

    const token = generateToken(user);
    setAuthCookie(res, token, "user");

    return res.status(200).json({
      status: "success",
      message: "Successfully logged in",
      data: {
        user: safeUser(user),
        accessToken: token,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      error: error.message || error,
    });
  }
};

module.exports.logout = async (req, res) => {
  clearAuthCookie(res, "user");

  return res.status(200).json({
    status: "success",
    message: "Logged out",
  });
};

module.exports.getMe = async (req, res) => {
  try {
    const user = await User.findOne({ email: req?.user?.email });

    return res.status(200).json({
      status: "success",
      data: safeUser(user),
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      error,
    });
  }
};

module.exports.confirmEmail = async (req, res) => {
  try {
    const rawToken = req.params.token;

    const tokenHash = crypto
      .createHash("sha256")
      .update(rawToken)
      .digest("hex");

    const user = await User.findOne({
      confirmationToken: tokenHash,
    }).select("+confirmationToken +confirmationTokenExpires");

    if (!user) {
      return res.status(403).json({
        status: "fail",
        error: "Invalid token",
      });
    }

    if (new Date() > new Date(user.confirmationTokenExpires)) {
      return res.status(401).json({
        status: "fail",
        error: "Token expired",
      });
    }

    user.status = "active";
    user.confirmationToken = undefined;
    user.confirmationTokenExpires = undefined;

    await user.save({ validateBeforeSave: false });

    const accessToken = generateToken(user);
    setAuthCookie(res, accessToken, "user");

    return res.status(200).json({
      status: "success",
      message: "Successfully activated your account.",
      data: {
        user: safeUser(user),
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: "fail",
      error,
    });
  }
};

module.exports.forgetPassword = async (req, res) => {
  try {
    const { verifyEmail } = req.body;

    const user = await User.findOne({
      email: verifyEmail,
    }).select("+confirmationToken +confirmationTokenExpires");

    if (!user) {
      return res.status(404).send({
        message: "User Not found with this email!",
      });
    }

    const rawToken = generateRandomToken();

    const tokenHash = crypto
      .createHash("sha256")
      .update(rawToken)
      .digest("hex");

    user.confirmationToken = tokenHash;
    user.confirmationTokenExpires = new Date(Date.now() + 15 * 60 * 1000);

    await user.save({ validateBeforeSave: false });

    const body = {
      from: secret.email_user,
      to: `${verifyEmail}`,
      subject: "Password Reset",
      html: `<h2>Hello ${verifyEmail}</h2>
        <p>A request has been received to change the password for your Maathrey Wellness account</p>
        <p>This link will expire in <strong>15 minutes</strong>.</p>
        <p style="margin-bottom:20px;">Click this link to reset your password</p>
        <a href="${secret.client_url}/forget-password/${rawToken}" style="background:#22c55e;color:white;border:1px solid #22c55e; padding: 10px 15px; border-radius: 4px; text-decoration:none;">Reset Password</a>
        <p style="margin-top: 35px;">If you did not initiate this request, please contact us immediately at info@maathreypharmaceuticals.com</p>
        <p style="margin-bottom:0px;">Thank you</p>
        <strong>Maathrey Wellness</strong>`,
    };

    return sendEmail(body, res, "Please check your email to reset password!");
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: "fail",
      error,
    });
  }
};

module.exports.confirmForgetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    const tokenHash = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await User.findOne({
      confirmationToken: tokenHash,
    }).select("+confirmationToken +confirmationTokenExpires");

    if (!user) {
      return res.status(403).json({
        status: "fail",
        error: "Invalid token",
      });
    }

    if (new Date() > new Date(user.confirmationTokenExpires)) {
      return res.status(401).json({
        status: "fail",
        error: "Token expired",
      });
    }

    user.password = password;
    user.confirmationToken = undefined;
    user.confirmationTokenExpires = undefined;

    await user.save();

    return res.status(200).json({
      status: "success",
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: "fail",
      error,
    });
  }
};

module.exports.changePassword = async (req, res) => {
  try {
    const email = req.user?.email || req.body.email;
    const currentPassword = req.body.password;
    const newPassword = req.body.newPassword;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isAdmin = req.user?.role === "admin";

    if (!isAdmin && req.user?.email !== email) {
      return res.status(403).json({
        message: "You are not allowed to change this password",
      });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect current password",
      });
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    if (req.user?._id !== userId && req.user?.role !== "admin") {
      return res.status(403).json({
        status: "fail",
        error: "You are not allowed to update this user",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    user.name = req.body.name ?? user.name;
    user.email = req.body.email ?? user.email;
    user.phone = req.body.phone ?? user.phone;
    user.address = req.body.address ?? user.address;
    user.bio = req.body.bio ?? user.bio;

    const updatedUser = await user.save();

    return res.status(200).json({
      status: "success",
      message: "Successfully updated profile",
      data: {
        user: safeUser(updatedUser),
      },
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      status: "fail",
      message: "Unable to update user profile",
    });
  }
};