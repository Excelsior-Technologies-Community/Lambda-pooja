const faqModel = require("../models/faqModel");

exports.getFaq = async (req, res) => {
  try {
    const result = await faqModel.getAllFaq();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Database Error"
    });
  }
};