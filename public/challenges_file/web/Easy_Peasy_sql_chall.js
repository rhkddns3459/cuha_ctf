const router = require("express");
const mysql = require('mysql2');

const challenge_web1 = async(req, res) => {
    const {id,pw} = req.body;
    const params = [id];
    
    if(id == "guest" || id == "no") 
        return res.send("<h1>You are not admin!</h1>");
   
    const sql = connection.query('SELECT * FROM Web1 where id =' + "'" + params + "'", function(err, rows) {
        if(err) console.log(err);
            if(rows != undefined) {
        if(rows.length > 0) {
            //YOU CAN GET FLAG
        } else {
            res.send("<script>alert('로그인 실패');location.href='/challenge/web/web1';</script>");
        }
    } else {
        res.send("<script>alert('조회 오류');location.href='/challenge/web/web1';</script>");
    }
        
    });
  
}

module.exports = {
    challenge_web1,
}