const express = require("express");
const router = express.Router();
const brandController = require("../controller/brandController");
const verifyToken = require("../middleware/verifyToken");
const authorize = require("../middleware/authorize");

router.post("/add", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), brandController.addBrand);
router.post("/add-all", verifyToken, authorize("Admin", "Super Admin"), brandController.addAllBrand);
router.get("/active", brandController.getActiveBrands);
router.get("/all", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), brandController.getAllBrands);
router.delete("/delete/:id", verifyToken, authorize("Admin", "Super Admin"), brandController.deleteBrand);
router.get("/get/:id", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), brandController.getSingleBrand);
router.patch("/edit/:id", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), brandController.updateBrand);

module.exports = router;
