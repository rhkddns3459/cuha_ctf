const { Router } = require("express");
const express = require("express");

const router = express.Router();

const registerRouter = require("./register");

router.get("/", (req, res) => {
    res.render("index.ejs");
})

router.get("/challenges", (req, res) => {
    res.render("category/challenges.ejs");
})

router.get("/scoreboard", (req, res) => {
    res.render("category/scoreboard.ejs");
})

router.get("/team", (req, res) => {
    res.render("category/team.ejs");
})

router.get("/settings", (req, res) => {
    res.render("category/settings.ejs");
})

router.use("/register", registerRouter);

router.get("/login", (req, res) => {
    res.render("members/login.ejs");
})

router.get("/profile", (req, res) => {
    res.render("members/profile.ejs");
})



module.exports = router;