const db = require("../db");

exports.getCourses = async (req, res) => {
  try {
    const [result] = await db.query(
      "CALL sp_GetCourses()"
    );

    res.json(result[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};