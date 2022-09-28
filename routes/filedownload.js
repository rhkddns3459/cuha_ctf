const express = require("express");

const router = express.Router();
const controller_web3 = require("../controllers/challenge_web/challenge_web3.ctrl");

router.get("/easy/web3", (req, res) => {
    res.render("challenges/challenge_web/web/easy/web3.ejs");
});

router.get("/easy", (req, res) => {
    res.render("challenges/challenge_web/web/hint1.ejs");
});

router.get("/", (req, res) => {
    res.render("challenges/challenge_web/web/hint2.ejs");
});

router.post("/easy/web3/submit", controller_web3.challenge_web3);

module.exports = router;