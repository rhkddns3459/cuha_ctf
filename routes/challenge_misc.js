const express = require("express");

const router = express.Router();
const path = require('path');
router.get("/", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_misc/category5_misc.ejs", {session: req.session});
    }
});

router.get('/download_misc3', (req, res, next) => {
    const text = 'coffee.jpg';  
    res.setHeader('Content-Disposition', `attachment; filename=${text}`); // 이게 핵심 
    res.sendFile(path.join(__dirname, '../public/challenges_file/misc', 'coffee.jpg'));
  });

router.get('/download_misc4', (req, res, next) => {
    const text = 'dig_flag.jpg';  
    res.setHeader('Content-Disposition', `attachment; filename=${text}`); // 이게 핵심 
    res.sendFile(path.join(__dirname, '../public/challenges_file/misc', 'dig_flag.jpg'));
  });

router.get('/download_misc5', (req, res, next) => {
  const text = 'QR_ctf.png';  
  res.setHeader('Content-Disposition', `attachment; filename=${text}`); // 이게 핵심 
  res.sendFile(path.join(__dirname, '../public/challenges_file/misc', 'QR_ctf.png'));
});

router.get('/download_misc6', (req, res, next) => {
    const text = 'ctf.zip';  
    res.setHeader('Content-Disposition', `attachment; filename=${text}`); // 이게 핵심 
    res.sendFile(path.join(__dirname, '../public/challenges_file/misc', 'ctf.zip'));
  });

module.exports = router;

