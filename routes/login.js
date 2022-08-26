const express = require("express");

const router = express.Router();

const controller = require("../controllers/login.ctrl")

router.post("../views/login/submit", controller.login_user);

router.get("/", (req, res) => {
    res.render("members/login.ejs");
});

router.post("/submit", controller.login_user);
module.exports = router;