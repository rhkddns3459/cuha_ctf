const { Router } = require("express");
const express = require("express");

const router = express.Router();

const registerRouter = require("./register");
const loginRouter = require("./login")
const scoreboardRouter = require("./scoreboard")

router.get("/", (req, res) => {
    res.render("index.ejs");
});

router.get("/web", (req, res) => {
    res.render("challenge_category/category1_web.ejs");
});

router.get("/reversing", (req, res) => {
    res.render("challenge_category/category2_reversing.ejs");
});

router.get("/system", (req, res) => {
    res.render("challenge_category/category3_system.ejs");
});

router.get("/network", (req, res) => {
    res.render("challenge_category/category4_network.ejs");
});

router.get("/crypto", (req, res) => {
    res.render("challenge_category/category5_crypto.ejs");
});

router.get("/forensic", (req, res) => {
    res.render("challenge_category/category6_forensic.ejs");
});

router.get("/misc", (req, res) => {
    res.render("challenge_category/category7_misc.ejs");
});

router.get("/submit", (req, res) => {
    res.render("category/submit.ejs");
});

router.get("/team", (req, res) => {
    res.render("category/team.ejs");
});

router.get("/settings", (req, res) => {
    res.render("category/settings.ejs");
});

router.use("/register", registerRouter);

router.use("/login", loginRouter);

router.use("/scoreboard", scoreboardRouter);

router.get("/profile", (req, res) => {
    res.render("members/profile.ejs");
});



module.exports = router;