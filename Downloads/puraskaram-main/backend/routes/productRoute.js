const express = require("express");
const {
  addProduct,
  addAllProducts,
  getShowingProducts,
  getDiscountProduct,
  getSingleProduct,
  getRelatedProducts,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");

const verifyToken = require("../middleware/verifyToken");
const authorize = require("../middleware/authorize");
const validateRequest = require("../middleware/validateRequest");
const { createProductValidator, updateProductValidator } = require("../validators/productValidators");

const router = express.Router();

router.get("/all", getAllProducts);
router.get("/show", getShowingProducts);
router.get("/discount", getDiscountProduct);
router.get("/relatedProduct", getRelatedProducts);
router.get("/:id", getSingleProduct);

router.post("/add-all", verifyToken, authorize("Admin", "Super Admin"), addAllProducts);
router.post(
  "/add",
  verifyToken,
  authorize("Admin", "Super Admin", "Manager", "CEO"),
  createProductValidator,
  validateRequest,
  addProduct
);
router.delete("/:id", verifyToken, authorize("Admin", "Super Admin"), deleteProduct);
router.patch(
  "/edit-product/:id",
  verifyToken,
  authorize("Admin", "Super Admin", "Manager", "CEO"),
  updateProductValidator,
  validateRequest,
  updateProduct
);

module.exports = router;
