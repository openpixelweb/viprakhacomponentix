const express = require("express");
const userController = require("../controller/userController");
const { verifyUserToken } = require("../middleware/verifyToken");
const router = express.Router();

router.get("/confirmEmail/:token", userController.confirmEmail);
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/google-login", userController.googleLogin);
router.post("/logout", userController.logout);
router.patch("/forget-password", userController.forgetPassword);
router.patch("/confirm-forget-password", userController.confirmForgetPassword);
router.get("/me", verifyUserToken, userController.getMe);
router.patch("/change-password", verifyUserToken, userController.changePassword);
router.put("/update-user/:id", verifyUserToken, userController.updateUser);

module.exports = router;
