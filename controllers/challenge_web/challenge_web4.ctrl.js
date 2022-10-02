const router = require("express");

const bcrypt = require('bcrypt');


const tt = require('../../routes/challenge_web');
const challenge_web4 = async(req, res) => {
    console.log(req.signedCookies.flag)

    const result = req.signedCookies.flag
  
    xss = req.body.xss;
    if(xss === '<script>alert(document.cookie);</script>') {
        res.cookie('flag', result, {
            path: '/challenge/web/web4',
            })
            
            res.send(xss);
    } else {
        res.send(xss);
    }
   
}


module.exports = {
    challenge_web4,
}