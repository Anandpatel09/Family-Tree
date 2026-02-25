const db = require("../config/db");

// Find user by email
const findByEmail = async (email) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  return rows;
};

// Update reset token
const updateResetToken = async (email, token, expireTime) => {
  await db.execute(
    "UPDATE users SET reset_token = ?, reset_token_expire = ? WHERE email = ?",
    [token, expireTime, email],
  );
};

// Find user by valid (non-expired) reset token
const findByValidToken = async (token) => {
  const [rows] = await db.execute(
    "SELECT * FROM users WHERE reset_token = ? AND reset_token_expire > ?",
    [token, Date.now()],
  );
  return rows[0] || null;
};

// Update password
const updatePassword = async (token, hashedPassword) => {
  await db.execute(
    "UPDATE users SET password = ?, reset_token = NULL, reset_token_expire = NULL WHERE reset_token = ?",
    [hashedPassword, token],
  );
};

module.exports = {
  findByEmail,
  updateResetToken,
  findByValidToken,
  updatePassword,
};

// ALTER TABLE users
// ADD COLUMN reset_token VARCHAR(255),
// ADD COLUMN reset_token_expire BIGINT;
