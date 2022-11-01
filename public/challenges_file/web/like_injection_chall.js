const router = require("express");
const mysql = require('mysql2');
const sql_exp = /(true)|(=)/g;

const challenge_web2 = async(req, res) => {
    const {id,pw} = req.body;
    const params = [id];
    const params2 = [pw];

    if(id == "guest" || id == "no") 
        return res.send("<h1>I don't like guest!</h1>");

   if(id.match(sql_exp) !== null) {
        return res.send("<script>alert('no hack');location.href='/challenge/web/web2';</script>");
    }   
    const sql = connection.query('SELECT * FROM Web2 where id =' + "'" + params + "'" + 'and pw =' + "'" + params2 + "'" , function(err, rows) {
            if(rows != undefined) {
        if(rows.length > 0) {
            //YOU CAN GET FLAG
        } else {
            return res.send("<script>alert('로그인 실패');location.href='/challenge/web/web2';</script>");
        }
    } else {
        return res.send("<script>alert('조회 오류');location.href='/challenge/web/web2';</script>");
    }
        
    });
  
}

module.exports = {
    challenge_web2,
}