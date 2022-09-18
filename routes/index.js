const { Router } = require("express");
const express = require("express");

const router = express.Router();

const registerRouter = require("./register");
const loginRouter = require("./login");
const authRouter = require("./auth");
const scoreboardRouter = require("./scoreboard");
const settingsRouter = require("./settings");

const profileRouter = require("./profile");

const challenge_webRouter = require("./challenge_web");
const challenge_networkRouter = require("./challenge_network");
const challenge_miscRouter = require("./challenge_misc");
const challenge_cryptoRouter = require("./challenge_crypto");
const challenge_reversingRouter = require("./challenge_reversing");

router.get("/", (req, res) => {
    console.log("--------------------------------------")
    console.log("index.js = " + JSON.stringify(req.session, null, 2));
    
    res.render("index.ejs", {session: req.session});
});


router.use("/challenge/web", challenge_webRouter);

router.use("/challenge/network", challenge_networkRouter);

router.use("/challenge/misc", challenge_miscRouter);

router.use("/challenge/reversing", challenge_reversingRouter);

router.use("/challenge/crypto", challenge_cryptoRouter);



router.use("/settings", settingsRouter);

router.use("/register", registerRouter);

router.use("/login", loginRouter);

router.use("/scoreboard", scoreboardRouter);

router.use("/logout", authRouter);

router.use("/profile", profileRouter);



module.exports = router;