const express = require("express");
const router = express.Router();
const controller = require("../controllers/scoreboard.ctrl");

router.get("/", controller.user_rank);

module.exports = router;
