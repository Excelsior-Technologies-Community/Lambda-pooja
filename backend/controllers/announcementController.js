const db = require("../db");

exports.getAnnouncements = async (req, res) => {
  try {

    const [rows] = await db.query(
      "CALL GetAnnouncements()"
    );

    res.json(rows[0]);

  } catch (err) {

    console.log(err);
    res.status(500).json({
      error: err.message
    });

  }
};