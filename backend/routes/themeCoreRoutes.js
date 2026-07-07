const express = require("express");
const router = express.Router();

const controller = require("../controllers/themeCoreController");

router.get("/", controller.getThemeCore);

module.exports = router;