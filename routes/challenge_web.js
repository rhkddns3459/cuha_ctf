const express = require("express");

const bcrypt = require('bcrypt');

const router = express.Router();

const path = require("path");

const controller_web3 = require("../controllers/challenge_web/challenge_web3.ctrl");
const controller_web4 = require("../controllers/challenge_web/challenge_web4.ctrl");


router.get("/", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_web/category1_web.ejs", {session: req.session});
    }
});

router.get("/web1", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
        res.render("challenges/challenge_web/robots/index.ejs");
    }
});

router.get('/web1/robots.txt', (req, res) => {
  res.render("challenges/challenge_web/robots/robots.ejs");
})

router.get('/web1/admin', (req, res) => {
  res.render("challenges/challenge_web/robots/admin.ejs");
})

router.get("/web3", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_web/web3.ejs");
    }
});

router.post("/web3/submit", controller_web3.challenge_web3);

router.get("/web4", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
        res.render("challenges/challenge_web/web4.ejs");
    }
});

router.post("/web4/submit", controller_web4.challenge_web4);

router.get('/download_web3', (req, res, next) => {
    const text = 'Easy_Peasy_sql_chall.js';  
    res.setHeader('Content-Disposition', `attachment; filename=${text}`); // 이게 핵심 
    res.sendFile(path.join(__dirname, '../public/challenges_file/web', 'Easy_Peasy_sql_chall.js'));
  });

router.get('/download_web4', (req, res, next) => {
  const text = 'like_injection_chall.js';  
  res.setHeader('Content-Disposition', `attachment; filename=${text}`); // 이게 핵심 
  res.sendFile(path.join(__dirname, '../public/challenges_file/web', 'like_injection_chall.js'));
});

module.exports = router;