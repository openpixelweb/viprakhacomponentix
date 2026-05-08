const express = require("express");
const router = express.Router();
const multer = require("multer");
const verifyToken = require("../middleware/verifyToken");
const authorize = require("../middleware/authorize");
const { cloudinaryController } = require("../controller/cloudinaryController");

const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

const imageFileFilter = (req, file, cb) => {
  if (!file.mimetype || !allowedMimeTypes.has(file.mimetype)) {
    return cb(new Error("Only JPG, PNG, WEBP, and GIF images are allowed"));
  }
  cb(null, true);
};

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: imageFileFilter,
  limits: { fileSize: 5 * 1024 * 1024, files: 5 },
});

router.post("/add-img", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), upload.single("image"), cloudinaryController.saveImageLocal);
router.post("/add-multiple-img", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), upload.array("images", 5), cloudinaryController.addMultipleImageLocal);
router.delete("/img-delete", verifyToken, authorize("Admin", "Super Admin", "Manager", "CEO"), cloudinaryController.deleteUploadedImage);

module.exports = router;
