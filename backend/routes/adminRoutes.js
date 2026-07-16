const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware);

router.get("/:table", adminController.getAll);
router.get("/:table/:id", adminController.getOne);
router.post("/:table", adminController.create);
router.put("/:table/:id", adminController.update);
router.delete("/:table/:id", adminController.delete);

module.exports = router;
