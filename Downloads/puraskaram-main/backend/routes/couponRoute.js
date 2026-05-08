const express = require("express");
const router = express.Router();
const {
  addCoupon,
  addAllCoupon,
  getAllCoupons,
  getCouponById,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponController");
const verifyToken = require("../middleware/verifyToken");
const authorize = require("../middleware/authorize");

router.post("/add", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), addCoupon);
router.post("/all", verifyToken, authorize("Admin", "Super Admin"), addAllCoupon);
router.get("/", getAllCoupons);
router.get("/:id", getCouponById);
router.patch("/:id", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), updateCoupon);
router.delete("/:id", verifyToken, authorize("Admin", "Super Admin"), deleteCoupon);

module.exports = router;
