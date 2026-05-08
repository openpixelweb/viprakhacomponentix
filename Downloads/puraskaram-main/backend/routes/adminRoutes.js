const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getMe,
  updateStaff,
  changePassword,
  addStaff,
  getAllStaff,
  deleteStaff,
  getStaffById,
  forgetPassword,
  confirmAdminForgetPass,
} = require("../controller/adminController");
const { verifyAdminToken } = require("../middleware/verifyToken");
const authorize = require("../middleware/authorize");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/me", verifyAdminToken, authorize("Admin", "Super Admin", "Manager", "CEO"), getMe);
router.patch("/forget-password", forgetPassword);
router.patch("/confirm-forget-password", confirmAdminForgetPass);
router.patch("/change-password", verifyAdminToken, authorize("Admin", "Super Admin", "Manager", "CEO"), changePassword);
router.post("/add", verifyAdminToken, authorize("Admin", "Super Admin"), addStaff);
router.get("/all", verifyAdminToken, authorize("Admin", "Super Admin"), getAllStaff);
router.get("/get/:id", verifyAdminToken, authorize("Admin", "Super Admin"), getStaffById);
router.patch("/update-stuff/:id", verifyAdminToken, authorize("Admin", "Super Admin"), updateStaff);
router.patch("/update-staff/:id", verifyAdminToken, authorize("Admin", "Super Admin"), updateStaff);
router.delete("/:id", verifyAdminToken, authorize("Admin", "Super Admin"), deleteStaff);

module.exports = router;
