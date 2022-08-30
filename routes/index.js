const { Router } = require("express");
const express = require("express");

const router = express.Router();

const registerRouter = require("./register");
const loginRouter = require("./login")
const authRouter = require("./auth")
const scoreboardRouter = require("./scoreboard")

router.get("/", (req, res) => {
    console.log("--------------------------------------")
    console.log("index.js = " + JSON.stringify(req.session, null, 2));
    
    res.render("index.ejs", {session: req.session});
});

router.get("/web", (req, res) => {
    res.render("challenge_category/category1_web.ejs", {session: req.session});
});

router.get("/reversing", (req, res) => {
    res.render("challenge_category/category2_reversing.ejs", {session: req.session});
});

router.get("/system", (req, res) => {
    res.render("challenge_category/category3_system.ejs", {session: req.session});
});

router.get("/network", (req, res) => {
    res.render("challenge_category/category4_network.ejs", {session: req.session});
});

router.get("/crypto", (req, res) => {
    res.render("challenge_category/category5_crypto.ejs", {session: req.session});
});

router.get("/forensic", (req, res) => {
    res.render("challenge_category/category6_forensic.ejs", {session: req.session});
});

router.get("/misc", (req, res) => {
    res.render("challenge_category/category7_misc.ejs", {session: req.session});
});

router.get("/submit", (req, res) => {
    res.render("category/submit.ejs", {session: req.session});
});

router.get("/team", (req, res) => {
    res.render("category/team.ejs", {session: req.session});
});

router.get("/settings", (req, res) => {
    res.render("category/settings.ejs", {session: req.session});
});

router.use("/register", registerRouter);

router.use("/login", loginRouter);

router.use("/scoreboard", scoreboardRouter);

router.use("/logout", authRouter);

router.get("/profile", (req, res) => {
    res.render("members/profile.ejs", {session: req.session});
});

module.exports = router;