const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const { findByValidToken, updatePassword } = userModel;

const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await findByValidToken(token);

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await updatePassword(token, hashedPassword);

    res.json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { resetPassword };
