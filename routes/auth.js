const { Router } = require("express");
const express = require("express");

const router = express.Router();

const controller = require("../controllers/auth.ctrl")

router.get("/", controller.logout);

module.exports = router;