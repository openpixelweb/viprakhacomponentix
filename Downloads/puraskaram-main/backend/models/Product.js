const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema(
  {
    sku: { type: String, required: true },
    title: { type: String, required: true, trim: true },
    itemInfo: {
      type: String,
      enum: ["best-selling", "latest-product", "top-rated", "none"],
      default: "none",
    },
    parent: { type: String, required: true, trim: true },
    tags: [String],
    image: { type: String, default: "" },
    originalPrice: { type: Number, required: true, min: [0, "Price can't be negative"] },
    price: { type: Number, required: true, default: 0, min: [0, "Price can't be negative"] },
    discount: { type: Number, default: 0 },
    relatedImages: [{ type: String }],
    description: { type: String, required: true, trim: true },
    brand: {
      name: { type: String, required: true },
      id: { type: ObjectId, ref: "Brand", required: true },
    },
    categories: [
      {
        name: { type: String, required: true },
        id: { type: ObjectId, ref: "Category", required: true },
      },
    ],
    unit: { type: String, required: true },
    quantity: { type: Number, required: true, min: [0, "Quantity can't be negative"] },
    type: String,
    status: { type: String, default: "active", enum: ["active", "inActive"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);