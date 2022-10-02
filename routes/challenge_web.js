const express = require("express");

const bcrypt = require('bcrypt');

const router = express.Router();

router.get("/", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_web/category1_web.ejs", {session: req.session});
    }
});

const controller_web1 = require("../controllers/challenge_web/challenge_web1.ctrl");
const controller_web2 = require("../controllers/challenge_web/challenge_web2.ctrl");
const controller_web3 = require("../controllers/challenge_web/challenge_web3.ctrl");
const controller_web4 = require("../controllers/challenge_web/challenge_web4.ctrl");


    


router.get("/web1", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_web/web1.ejs");
    }
});

router.post("/web1/submit", controller_web1.challenge_web1);

router.get("/web2", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
        res.render("challenges/challenge_web/web2.ejs");
    }
});

router.post("/web2/submit", controller_web2.challenge_web2);

/*router.get("/easy/web3", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
        res.render("challenges/challenge_web/web/easy/web3.ejs");
    }
});*/

router.post("/web3/submit", controller_web3.challenge_web3);

router.get("/web4", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {

    const pw = 'cuha{a_d_m_i_n}'
    const salt = 12;
    const flag = bcrypt.hashSync(pw, salt);

        res.cookie('flag', flag, {
            path: '/challenge/web/web4'
        });

        res.render("challenges/challenge_web/web4.ejs");
        
    }
});

      

router.post("/web4/submit", controller_web4.challenge_web4);

module.exports = router;


