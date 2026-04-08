const db = require("../config/db");

const Addmember = async (req, res) => {
  try {

    const {
      fullName = null,
      wifename = null,
      father = null,
      mother = null,
      grandfather = null,
      grandmother = null,
      dob = null,
      gender = null,
      village = null,
      address = null,
      phone = null,
      children = []
    } = req.body || {};

    const fileName = req.file ? req.file.filename : null;
    const childList = typeof children === "string" ? JSON.parse(children || "[]") : children;

    /* -------- VALIDATION -------- */
    if (!fullName || !dob || !gender || !father || !mother || !grandfather || !grandmother || !village || !address || !phone) {
      return res.status(400).json({
        message: "Please fill all required member fields.",
      });
    }

    /* -------- INSERT PERSON -------- */
    const query = `
      INSERT INTO persons
      (fullName, wifename, dob, gender, father, mother, grandfather, grandmother, file, village, address, phone)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(query, [
      fullName,
      wifename,
      dob,
      gender,
      father,
      mother,
      grandfather,
      grandmother,  
      fileName,
      village,
      address,
      phone,
    ]);

    const personId = result.insertId;

   
    /* -------- INSERT CHILDREN -------- */

    if (childList && childList.length > 0) {
      for (const child of childList) {
        const child_name = child.child_name || null;
        const child_gender = child.child_gender || null;

        await db.execute(
          `INSERT INTO children (person_id, child_name, child_gender)
           VALUES (?, ?, ?)`,
          [personId, child_name, child_gender]
        );
      }
    }

    /* -------- FETCH PERSON -------- */

    const [person] = await db.execute(
      `SELECT * FROM persons WHERE id = ?`,
      [personId]
    );

    /* -------- FETCH CHILDREN -------- */

    const [childlist] = await db.execute(
      `SELECT child_name, child_gender 
       FROM children 
       WHERE person_id = ?`,
      [personId]
    );

    /* -------- RESPONSE -------- */

    res.status(200).json({
      message: "Person added successfully",
      data: {
        ...person[0],
        profile_pic: fileName ? `http://localhost:5000/uploads/${fileName}` : null,
        children: childlist,
      },
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error"
    });
  }
};

module.exports = { Addmember };


