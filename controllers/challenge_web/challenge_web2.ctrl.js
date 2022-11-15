const router = require("express");



const challenge_web2 = async(req, res) => {
  return res.send("<script>alert('post는 허용하지 않는 method 방식입니다.');location.href='/challenges/challenge_web/web/easy/web2';</script>")
}

module.exports = {
    challenge_web2,
}