const { Router } = require("express");
const express = require("express");

const router = express.Router();

const registerRouter = require("./register");
const loginRouter = require("./login");
const authRouter = require("./auth");
const scoreboardRouter = require("./scoreboard");
const settingsRouter = require("./settings");
const challengeRouter = require("./challenge");
const profileRouter = require("./profile");

router.get("/", (req, res) => {
    console.log("--------------------------------------")
    console.log("index.js = " + JSON.stringify(req.session, null, 2));
    
    res.render("index.ejs", {session: req.session});
});

router.use("/challenge", challengeRouter);

router.use("/settings", settingsRouter);

router.use("/register", registerRouter);

router.use("/login", loginRouter);

router.use("/scoreboard", scoreboardRouter);

router.use("/logout", authRouter);

router.use("/profile", profileRouter);

module.exports = router;