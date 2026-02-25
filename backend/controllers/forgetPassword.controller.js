const crypto = require("crypto");

const userModel = require("../models/user.model");
const { findByEmail, updateResetToken } = userModel;
//Forgot Password
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await findByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    const expireTime = Date.now() + 10 * 60 * 1000; // 10 min

    await updateResetToken(email, resetToken, expireTime);

    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;

    // TODO: Send email using nodemailer

    res.json({
      message: "Reset link sent to email",
      resetLink, // remove in production
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { forgotPassword };
