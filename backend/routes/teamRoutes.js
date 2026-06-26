const router = require("express").Router();
const teamController = require("../controllers/teamController");

router.get("/team", teamController.getTeamMembers);

module.exports = router;