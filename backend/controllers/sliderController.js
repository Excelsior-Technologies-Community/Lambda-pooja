const Slider = require("../models/sliderModel");

const getSliders = async (req, res) => {
  try {
    const result =
      await Slider.getAllSliders();

    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getSliders,
};