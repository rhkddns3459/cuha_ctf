const express = require("express");
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    if(!req.session.is_logined) {
        res.send("<script>alert('로그인 후 이용해주세요');location.href='/login';</script>");
    } else {
    res.render("challenges/challenge_network/category3_network.ejs", {session: req.session});
    }
});

router.get('/download_network1', (req, res, next) => {
    const text = 'telnet.pcapng';  
    res.setHeader('Content-Disposition', `attachment; filename=${text}`); // 이게 핵심 
    res.sendFile(path.join(__dirname, '../public/challenges_file/network', 'telnet.pcapng'));
  });

  router.get('/download_network2', (req, res, next) => {
    const text = 'DOS.zip';  
    res.setHeader('Content-Disposition', `attachment; filename=${text}`); // 이게 핵심 
    res.sendFile(path.join(__dirname, '../public/challenges_file/network', 'DOS.zip'));
  });

module.exports = router;