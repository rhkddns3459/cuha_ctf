const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_misc/category5_misc.ejs", {session: req.session});
    }
});

module.exports = router;

