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
const challenge_flagRouter = require("./challenge_flag");
const challenge_fileDownload = require("./filedownload");

router.get("/", (req, res) => {
    console.log("--------------------------------------")
    console.log("index.js = " + JSON.stringify(req.session, null, 2));
    
    res.render("index.ejs", {session: req.session});
});

const controller_web2 = require("../controllers/challenge_web/challenge_web2.ctrl");

router.get("/challenges/challenge_web/web/easy/web2", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
        res.render("challenges/challenge_web/web/easy/web2.ejs");
    }
});

router.post("/challenges/challenge_web/web/easy/web2/submit", controller_web2.challenge_web2);

router.use("/challenge/web", challenge_webRouter);

router.use("/challenges/challenge_web/web", challenge_fileDownload);

router.use("/challenge/network", challenge_networkRouter);

router.use("/challenge/misc", challenge_miscRouter);

router.use("/challenge/reversing", challenge_reversingRouter);

router.use("/challenge/crypto", challenge_cryptoRouter);

router.use("/challenge/flag", challenge_flagRouter);

router.use("/settings", settingsRouter);

router.use("/register", registerRouter);

router.use("/login", loginRouter);

router.use("/scoreboard", scoreboardRouter);

router.use("/logout", authRouter);

router.use("/profile", profileRouter);



module.exports = router;