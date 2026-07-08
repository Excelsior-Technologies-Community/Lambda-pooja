const express = require("express");
const router = express.Router();

const controller = require("../controllers/builtInComponentsController");

router.get("/", controller.getBuiltInComponents);

module.exports = router;