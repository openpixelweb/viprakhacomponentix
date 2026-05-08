const express = require("express");
const router = express.Router();
const userOrderController = require("../controller/userOrderController");
const { verifyUserToken, verifyAdminToken } = require("../middleware/verifyToken");
const authorize = require("../middleware/authorize");

router.get("/dashboard-amount", verifyAdminToken, authorize("Admin", "Super Admin", "Manager", "CEO"), userOrderController.getDashboardAmount);
router.get("/sales-report", verifyAdminToken, authorize("Admin", "Super Admin", "Manager", "CEO"), userOrderController.getSalesReport);
router.get("/most-selling-category", verifyAdminToken, authorize("Admin", "Super Admin", "Manager", "CEO"), userOrderController.mostSellingCategory);
router.get("/dashboard-recent-order", verifyAdminToken, authorize("Admin", "Super Admin", "Manager", "CEO"), userOrderController.getDashboardRecentOrder);

router.get("/order-by-user", verifyUserToken, userOrderController.getOrderByUser);
router.get("/single-order/:id", verifyUserToken, userOrderController.getOrderById);

module.exports = router;
