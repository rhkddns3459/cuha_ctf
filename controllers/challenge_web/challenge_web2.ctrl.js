const router = require("express");

const mysql = require('mysql2');

const sql_exp = /(true)|(=)/g;

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'cuha_ctf',
    dateStrings: "date",
});

const challenge_web2 = async(req, res) => {
    const {id,pw} = req.body;
    console.log(typeof(id));
    const params = [id];
    const params2 = [pw];

    if(id == "guest" || id == "no") 
        return res.send("<h1>I don't like guest!</h1>");

   if(id.match(sql_exp) !== null) {
        return res.send("<script>alert('no hack');location.href='/challenge/web/web2';</script>");
    }   
    const sql = connection.query('SELECT * FROM Web2 where id =' + "'" + params + "'" + 'and pw =' + "'" + params2 + "'" , function(err, rows) {
        if(err) console.log(err);
            if(rows != undefined) {
        if(rows.length > 0) {
            
            return res.send("<h1>Hello admin! The Flag is cuha{I_l_ike_sql_y_e_a_h}</h1>");
        } else {
            console.log(sql);
            return res.send("<script>alert('로그인 실패');location.href='/challenge/web/web2';</script>");
        }
    } else {
        console.log(sql);
        return res.send("<script>alert('조회 오류');location.href='/challenge/web/web2';</script>");
    }
        
    });
  
}

module.exports = {
    challenge_web2,
}