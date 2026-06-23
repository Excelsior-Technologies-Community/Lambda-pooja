const db = require("../db");

const getAllSliders = (callback) => {
  db.query(
    "SELECT * FROM sliders WHERE status = 1",
    callback
  );
};

module.exports = {
  getAllSliders,
};