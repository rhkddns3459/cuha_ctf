const express = require("express");
const router = express.Router();
const controller = require("../controllers/register.ctrl");

router.get("/", (req, res) => {
    res.render("members/register.ejs");
});

router.post("/submit", controller.create_user);

module.exports = router;
