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





router.get("/web4", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {

   

res.cookie('flag','a_d_m_i_n', {
path: '/challenge/web/web4',
signed: true,
})

    /*res.clearCookie('flag', 'cuha{a_d_m_i_n}', {
        path: '/challenge/web/web4',
        signed: true,
    })*/
    res.render("challenges/challenge_web/web4.ejs");
        
    }
});

router.get('/download_web1', (req, res, next) => {
    const text = 'Easy_Peasy_sql_chall.js';  
    res.setHeader('Content-Disposition', `attachment; filename=${text}`); // 이게 핵심 
    res.sendFile(path.join(__dirname, '../public/challenges_file/web', 'Easy_Peasy_sql_chall.js'));
  });

router.get('/download_web2', (req, res, next) => {
    const text = 'like_injection_chall.js';  
    res.setHeader('Content-Disposition', `attachment; filename=${text}`); // 이게 핵심 
    res.sendFile(path.join(__dirname, '../public/challenges_file/web', 'like_injection_chall.js'));
  });



router.post("/web4/submit", controller_web4.challenge_web4);

module.exports = router;


