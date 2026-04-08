const db = require("../config/db");

const updateprofile = async (req, res) => {
  try {
    const userId = req.params.id;

    const { full_name, email, phone, dob, gender } = req.body;

    // 🖼️ Image (if uploaded)
    const profile_pic = req.file ? req.file.filename : null;

    // 🚨 Basic validation (extra safety)
    if (!full_name || !email || !phone || !dob || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 🧠 Dynamic query
    let query = `
      UPDATE users 
      SET full_name=?, email=?, phone=?, dob=?, gender=?
    `;

    const values = [full_name, email, phone, dob, gender];

    // 👉 Add profile_pic only if exists
    if (profile_pic) {
      query += `, profile_pic=?`;
      values.push(profile_pic);
    }

    query += ` WHERE id=?`;
    values.push(userId);

    // 🚀 Execute query
    const [result] = await db.execute(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
    });

  } catch (err) {
    console.error("Update Profile Error:", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = updateprofile;