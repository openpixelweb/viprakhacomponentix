const express = require("express");
const {
  addCategory,
  getShowingCategory,
  addAllCategory,
  getAllCategory,
  deleteCategory,
  getSingleCategory,
  updateCategory,
} = require("../controller/categoryController");
const verifyToken = require("../middleware/verifyToken");
const authorize = require("../middleware/authorize");

const router = express.Router();

router.post("/add", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), addCategory);
router.post("/add-all", verifyToken, authorize("Admin", "Super Admin"), addAllCategory);
router.get("/show", getShowingCategory);
router.get("/all", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), getAllCategory);
router.delete("/delete/:id", verifyToken, authorize("Admin", "Super Admin"), deleteCategory);
router.get("/get/:id", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), getSingleCategory);
router.patch("/edit/:id", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), updateCategory);

module.exports = router;
