const express = require("express");
const router = express.Router();
const ForgetPasswordController = require("../controllers/forgetPasswordController");

router.post("/forgot-password", ForgetPasswordController.forgotPassword);
router.post("/reset-password/:token", ForgetPasswordController.resetPassword);

module.exports = router;