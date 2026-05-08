const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
const { generateToken, generateRandomToken } = require("../utils/token");
const { sendEmail } = require("../config/email");
const { secret } = require("../config/secret");
const { setAuthCookie, clearAuthCookie } = require("../utils/authCookies");

const safeAdmin = (admin) => ({
  _id: admin._id,
  name: admin.name,
  email: admin.email,
  role: admin.role,
  phone: admin.phone,
  image: admin.image,
  status: admin.status,
  joiningDate: admin.joiningDate,
  createdAt: admin.createdAt,
  updatedAt: admin.updatedAt,
});

const registerAdmin = async (req, res, next) => {
  try {
    const isFirstAdmin = (await Admin.countDocuments()) === 0;
    const providedSecret = req.headers["x-bootstrap-secret"] || req.body.bootstrapSecret;
    if (!isFirstAdmin || !secret.bootstrap_admin_secret || providedSecret !== secret.bootstrap_admin_secret) {
      return res.status(403).send({ message: "Admin bootstrap is disabled" });
    }

    const isAdded = await Admin.findOne({ email: req.body.email });
    if (isAdded) return res.status(403).send({ message: "This Email already Added!" });

    const staff = await Admin.create({
      name: req.body.name,
      email: String(req.body.email).toLowerCase(),
      role: "Super Admin",
      password: req.body.password,
      joiningDate: req.body.joiningDate || new Date(),
      status: "Active",
    });

    const token = generateToken(staff);
    setAuthCookie(res, token, "admin");
    return res.status(200).send({ ...safeAdmin(staff), accessToken: token });
  } catch (err) {
    return next(err);
  }
};

const loginAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({ email: String(req.body.email || "").toLowerCase() }).select("+password");
    if (admin && await admin.comparePassword(req.body.password)) {
      const token = generateToken(admin);
      setAuthCookie(res, token, "admin");
      return res.send({ ...safeAdmin(admin), accessToken: token });
    }
    return res.status(401).send({ message: "Invalid Email or password!" });
  } catch (err) {
    return next(err);
  }
};

const logoutAdmin = async (req, res) => {
  clearAuthCookie(res, "admin");
  return res.status(200).json({ message: "Logged out" });
};

const getMe = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({ email: req.user?.email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    return res.status(200).json(safeAdmin(admin));
  } catch (err) {
    return next(err);
  }
};

const forgetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const admin = await Admin.findOne({ email }).select("+confirmationToken +confirmationTokenExpires");
    if (!admin) return res.status(404).send({ message: "Admin Not found with this email!" });

    const rawToken = generateRandomToken();
    const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
    admin.confirmationToken = tokenHash;
    admin.confirmationTokenExpires = new Date(Date.now() + 15 * 60 * 1000);
    await admin.save({ validateBeforeSave: false });

    const body = {
      from: secret.email_user,
      to: `${email}`,
      subject: "Password Reset",
      html: `<h2>Hello ${email}</h2>
        <p>A request has been received to change the password for your admin account</p>
        <p>This link will expire in <strong>15 minutes</strong>.</p>
        <p style="margin-bottom:20px;">Click this link to reset your password</p>
        <a href="${secret.admin_url}/forgot-password/${rawToken}" style="background:#22c55e;color:white;border:1px solid #22c55e; padding: 10px 15px; border-radius: 4px; text-decoration:none;">Reset Password</a>`,
    };

    return sendEmail(body, res, "Please check your email to reset password!");
  } catch (error) {
    return next(error);
  }
};

const confirmAdminForgetPass = async (req, res, next) => {
  try {
    const { token, password } = req.body;
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const admin = await Admin.findOne({ confirmationToken: tokenHash }).select("+confirmationToken +confirmationTokenExpires");
    if (!admin) return res.status(403).json({ status: "fail", message: "Invalid token" });
    if (new Date() > new Date(admin.confirmationTokenExpires)) return res.status(401).json({ status: "fail", message: "Token expired" });

    admin.password = password;
    admin.confirmationToken = undefined;
    admin.confirmationTokenExpires = undefined;
    await admin.save();

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    return next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const email = req.user?.email || req.body.email;
    const { oldPass, newPass } = req.body || {};
    const admin = await Admin.findOne({ email }).select("+password");
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isPrivileged = ["Admin", "Super Admin"].includes(req.user?.role);
    if (!isPrivileged && req.user?.email !== email) {
      return res.status(403).json({ message: "You are not allowed to change this password" });
    }

    if (!(await bcrypt.compare(oldPass, admin.password))) {
      return res.status(401).json({ message: "Incorrect current password" });
    }

    admin.password = newPass;
    await admin.save();
    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    return next(error);
  }
};

const resetPassword = async (req, res, next) => {
  return next(new Error("Deprecated reset endpoint"));
};

const addStaff = async (req, res, next) => {
  try {
    const isAdded = await Admin.findOne({ email: req.body.email });
    if (isAdded) return res.status(500).send({ message: "This Email already Added!" });

    const newStaff = await Admin.create({
      name: req.body.name,
      email: String(req.body.email).toLowerCase(),
      password: req.body.password || crypto.randomUUID(),
      phone: req.body.phone,
      joiningDate: req.body.joiningDate,
      role: req.body.role,
      image: req.body.image,
      status: req.body.status || "Active",
    });

    return res.status(200).send({ message: "Staff Added Successfully!", data: safeAdmin(newStaff) });
  } catch (err) {
    return next(err);
  }
};

const getAllStaff = async (req, res, next) => {
  try {
    const admins = await Admin.find({}).sort({ _id: -1 });
    return res.status(200).json({ status: true, message: "Staff get successfully", data: admins.map(safeAdmin) });
  } catch (err) {
    return next(err);
  }
};

const getStaffById = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.params.id);
    return res.send(admin ? safeAdmin(admin) : null);
  } catch (err) {
    return next(err);
  }
};

const updateStaff = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({ _id: req.params.id }).select("+password");
    if (!admin) return res.status(404).send({ message: "This Staff not found!" });

    admin.name = req.body.name ?? admin.name;
    admin.email = req.body.email ? String(req.body.email).toLowerCase() : admin.email;
    admin.phone = req.body.phone ?? admin.phone;
    admin.role = req.body.role ?? admin.role;
    admin.joiningDate = req.body.joiningDate ?? admin.joiningDate;
    admin.image = req.body.image ?? admin.image;
    if (req.body.password) admin.password = req.body.password;

    const updatedAdmin = await admin.save();
    if (String(req.user?._id) === String(updatedAdmin._id)) {
      const token = generateToken(updatedAdmin);
      setAuthCookie(res, token, "admin");
    }

    return res.send(safeAdmin(updatedAdmin));
  } catch (err) {
    return next(err);
  }
};

const deleteStaff = async (req, res, next) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Admin Deleted Successfully" });
  } catch (err) {
    return next(err);
  }
};

const updatedStatus = async (req, res, next) => {
  try {
    const newStatus = req.body.status;
    await Admin.updateOne({ _id: req.params.id }, { $set: { status: newStatus } });
    return res.send({ message: `Store ${newStatus} Successfully!` });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getMe,
  forgetPassword,
  resetPassword,
  addStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
  updatedStatus,
  changePassword,
  confirmAdminForgetPass,
};
