const db = require("../config/db");

const getAllMembers = async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT 
        p.id,
        p.fullName,
        p.gender,
        p.father,
        p.mother,
        p.grandfather,
        p.grandmother,
        p.phone,
        p.file,
        p.address,
        p.village,
        p.created_at,
        GROUP_CONCAT(c.child_name) AS children
      FROM persons p
      LEFT JOIN children c 
      ON p.id = c.person_id
      GROUP BY p.id
    `);

    // Format response properly
    const formattedData = rows.map((item) => ({
      id: item.id,
      fullName: item.fullName,
      gender: item.gender,
      father: item.father,
      mother: item.mother,
      grandfather: item.grandfather,
      grandmother: item.grandmother,
      phone: item.phone,
      address: item.address,
      village: item.village,
      file: item.file,
      profile_pic: item.file ? `http://localhost:5000/uploads/${item.file}` : null,
      created_at: item.created_at,
      children: item.children ? item.children.split(",") : [],
    }));

    res.json({
      success: true,
      data: formattedData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching members",
    });
  }
};

module.exports = getAllMembers;