const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({}, { timestamps: true });

const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", couponSchema);
module.exports = Coupon;