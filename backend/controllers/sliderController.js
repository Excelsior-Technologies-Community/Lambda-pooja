const Slider = require("../models/sliderModel");

const getSliders = (req, res) => {
  Slider.getAllSliders((err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

module.exports = {
  getSliders,
};