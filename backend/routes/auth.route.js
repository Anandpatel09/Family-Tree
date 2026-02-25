const express=require("express");
const { signUp } = require("../controllers/singUp.controller");
const {login}=require("../controllers/login.controller")
const router=express.Router();
const multer = require("multer");
const { forgotPassword } = require("../controllers/forgetPassword.controller");
const { resetPassword } = require("../controllers/resetPassword.controller");
const upload = multer({ dest: "uploads/" });

// router.post("/signup",signUp)
router.post("/signup", upload.single("profile_pic"), signUp);
router.post("/login",login)
router.post("/forgot-password",forgotPassword);
router.post("/reset-password/:token", resetPassword);

module.exports=router