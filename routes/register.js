const express = require("express");
const router = express.Router();

const controller = require("../controllers/register.ctrl");

router.post("..views/register/submit", controller.create_user);

router.get("/", (req, res) => {
    res.render("members/register.ejs");
});

router.post("/submit", controller.create_user);
module.exports = router;
