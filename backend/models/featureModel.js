const db = require("../db");

const getFeatures = async () => {
  const [rows] = await db.query(
    "SELECT * FROM features"
  );

  return rows;
};

module.exports = {
  getFeatures,
};