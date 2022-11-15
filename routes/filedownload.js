const express = require("express");

const router = express.Router();
const controller_web3 = require("../controllers/challenge_web/challenge_web3.ctrl");

router.get("/easy/web2", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
        res.render("challenges/challenge_web/web/easy/web2.ejs");
    }
   
});

router.get("/easy", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
        res.render("challenges/challenge_web/web/hint1.ejs");
    }
    
});

router.get("/", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
        res.render("challenges/challenge_web/web/hint2.ejs");
    }
    
});

router.post("/easy/web3/submit", controller_web3.challenge_web3);

module.exports = router;