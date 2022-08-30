const express = require("express");

const router = express.Router();
const controller = require("../controllers/profile.ctrl");

router.get("/", controller.profile);

module.exports = router;