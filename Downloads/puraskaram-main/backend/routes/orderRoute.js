const express = require("express");
const {
  createRazorpayOrder,
  addOrder,
  razorpayWebhook,
  getSingleOrder,
  updateOrderStatus,
  getOrders,
  paymentStatusEvent,
} = require("../controller/orderController");

const { verifyUserToken, verifyAdminToken } = require("../middleware/verifyToken");
const authorize = require("../middleware/authorize");

const router = express.Router();

router.get("/orders", verifyAdminToken, authorize("Admin", "Super Admin", "Manager", "CEO"), getOrders);
router.post("/create-razorpay-order", verifyUserToken, createRazorpayOrder);
router.post("/create-payment-intent", verifyUserToken, createRazorpayOrder);
router.post("/addOrder", verifyUserToken, addOrder);
router.post("/payment-status-event", verifyUserToken, paymentStatusEvent);
router.post("/razorpay-webhook", razorpayWebhook);
router.get("/:id", verifyAdminToken, authorize("Admin", "Super Admin", "Manager", "CEO"), getSingleOrder);
router.patch(
  "/update-status/:id",
  verifyAdminToken,
  authorize("Admin", "Super Admin", "Manager", "CEO"),
  updateOrderStatus
);

module.exports = router;