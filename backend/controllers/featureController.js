const featureModel = require("../models/featureModel");

const getFeatures = async (req, res) => {
  try {
    const data = await featureModel.getFeatures();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getFeatures
};