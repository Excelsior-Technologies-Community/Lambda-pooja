const sectionModel = require("../models/sectionModel");

const getSections = async (req, res) => {
  try {
    const result =
      await sectionModel.getSections();

    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getSections,
};