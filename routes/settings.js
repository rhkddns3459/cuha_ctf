const express = require("express");
const router = express.Router();
const controller = require("../controllers/settings.ctrl");

router.get("/", controller.settings);

module.exports = router;