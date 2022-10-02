const router = require("express");

const bcrypt = require('bcrypt');


const tt = require('../../routes/challenge_web');
const challenge_web4 = async(req, res) => {
    
    xss = req.body.xss;
    console.log(tt.dw);
   bcrypt.compare(tt.pw , tt.flag, (err, same) => {
     //=> true
    res.send(xss);
  })
 
   
}

module.exports = {
    challenge_web4,
}