const express = require("express");

const router = express.Router();




router.get("/web", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_category/category1_web.ejs", {session: req.session});
    }
});

router.get("/reversing", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_category/category2_reversing.ejs", {session: req.session});
    }
});

router.get("/system", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_category/category3_system.ejs", {session: req.session});
    }
});

router.get("/network", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_category/category4_network.ejs", {session: req.session});
    }
});

router.get("/crypto", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_category/category5_crypto.ejs", {session: req.session});
    }
});

router.get("/forensic", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_category/category6_forensic.ejs", {session: req.session});
    }
});

router.get("/misc", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_category/category7_misc.ejs", {session: req.session});
    }
});

router.get("/submit", (req, res) => {
    res.render("category/submit.ejs");
});

router.get("/settings", (req, res) => {
    res.render("category/settings.ejs");
});

module.exports = router;