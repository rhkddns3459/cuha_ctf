const express = require("express");

const router = express.Router();








// router.get("/system", (req, res) => {
//     if(!req.session.is_logined) {
//         res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
//     } else {
//     res.render("challenges/challenge_category/category3_system.ejs", {session: req.session});
//     }
// });





// router.get("/forensic", (req, res) => {
//     if(!req.session.is_logined) {
//         res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
//     } else {
//     res.render("challenges/challenge_category/category6_forensic.ejs", {session: req.session});
//     }
// });



module.exports = router;