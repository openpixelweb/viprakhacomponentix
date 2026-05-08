const mongoose = require("mongoose");

const generateInvoiceNumber = () => {
  const year = new Date().getFullYear();
  const random = Math.floor(100000 + Math.random() * 900000);
  return `IND-MAT-${year}-${random}`;
};

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    invoice: {
      type: String,
      required: true,
      unique: true,
      default: generateInvoiceNumber,
    },
    cart: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    contact: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    zipCode: { type: String, required: true, trim: true },
    subTotal: { type: Number, required: true, default: 0 },
    shippingCost: { type: Number, required: true, default: 0 },
    discount: { type: Number, required: true, default: 0 },
    totalAmount: { type: Number, required: true, default: 0 },
    shippingOption: { type: String, default: "", trim: true },
    paymentProvider: { type: String, required: true, default: "razorpay" },
    paymentMethod: { type: String, required: true, default: "Razorpay" },
    paymentOrderId: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
      index: true,
    },
    paymentId: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
      index: true,
    },
    paymentSignature: { type: String, required: true },
    paymentStatus: { type: String, required: true, default: "captured" },
    currency: { type: String, required: true, default: "INR" },
    paymentMeta: { type: mongoose.Schema.Types.Mixed },
    status: {
      type: String,
      enum: ["pending", "processing", "delivered", "cancel"],
      default: "pending",
    },
  },
  { timestamps: true }
);

orderSchema.pre("save", async function (next) {
  if (!this.isNew || this.invoice) {
    return next();
  }

  let isUnique = false;

  while (!isUnique) {
    const candidate = generateInvoiceNumber();
    const existing = await mongoose.models.Order.findOne({ invoice: candidate }).lean();

    if (!existing) {
      this.invoice = candidate;
      isUnique = true;
    }
  }

  next();
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

module.exports = Order;