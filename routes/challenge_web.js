const express = require("express");

const bcrypt = require('bcrypt');

const router = express.Router();

const path = require("path");

router.get("/", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_web/category1_web.ejs", {session: req.session});
    }
});

const controller_web1 = require("../controllers/challenge_web/challenge_web1.ctrl");
const controller_web2 = require("../controllers/challenge_web/challenge_web2.ctrl");


    


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

router.get("/web4", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
        res.render("challenges/challenge_web/robots/index.ejs");
    }
});

router.get('/web4/robots.txt', (req, res) => {
  res.render("challenges/challenge_web/robots/robots.ejs");
})

router.get('/web4/admin', (req, res) => {
  res.render("challenges/challenge_web/robots/admin.ejs");
})

module.exports = router;


