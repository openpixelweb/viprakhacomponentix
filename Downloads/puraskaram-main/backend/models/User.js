const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const BCRYPT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS || 12);

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },

    googleId: {
      type: String,
      default: null,
      index: true,
    },

    authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Must be at least 6 character"],
      select: false,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },

    contactNumber: {
      type: String,
      validate: [validator.isMobilePhone, "Please provide a valid contact number"],
    },

    shippingAddress: String,

    imageURL: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },

    phone: String,
    address: String,
    bio: String,

    status: {
      type: String,
      default: "inactive",
      enum: ["active", "inactive", "blocked"],
    },

    confirmationToken: { type: String, select: false },
    confirmationTokenExpires: { type: Date, select: false },
    passwordChangedAt: Date,
    passwordResetToken: { type: String, select: false },
    passwordResetExpires: { type: Date, select: false },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, BCRYPT_ROUNDS);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateConfirmationToken = function () {
  const token = crypto.randomBytes(32).toString("hex");

  this.confirmationToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  this.confirmationTokenExpires = new Date(Date.now() + 15 * 60 * 1000);

  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;