const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const BCRYPT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS || 12);

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: String,
    address: String,
    country: String,
    city: String,
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: String,
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "Inactive"],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      required: true,
      default: "Admin",
      enum: ["Admin", "Super Admin", "Manager", "CEO"],
    },
    joiningDate: Date,
    confirmationToken: { type: String, select: false },
    confirmationTokenExpires: { type: Date, select: false },
  },
  { timestamps: true }
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, BCRYPT_ROUNDS);
  next();
});

adminSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

adminSchema.methods.generateConfirmationToken = function () {
  const token = crypto.randomBytes(32).toString("hex");
  this.confirmationToken = crypto.createHash("sha256").update(token).digest("hex");
  this.confirmationTokenExpires = new Date(Date.now() + 15 * 60 * 1000);
  return token;
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
