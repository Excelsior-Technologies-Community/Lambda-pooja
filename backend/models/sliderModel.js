const db = require("../db");

const getAllSliders = async () => {
  const [rows] = await db.query(
    "SELECT * FROM sliders WHERE status = 1"
  );

  return rows;
};

module.exports = {
  getAllSliders,
};