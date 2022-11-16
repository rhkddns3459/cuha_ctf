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

const challenge_web4 = async(req, res) => {
    const {id,pw} = req.body;
    console.log(typeof(id));
    const params = [id];
    const params2 = [pw];

    if(id == "guest" || id == "no") 
        return res.send("<h1>I don't like guest!</h1>");

   if(id.match(sql_exp) !== null) {
        return res.send("<script>alert('no hack');location.href='/challenge/web/web4';</script>");
    }   
    const sql = connection.query('SELECT * FROM Web4 where id =' + "'" + params + "'" + 'and pw =' + "'" + params2 + "'" , function(err, rows) {
        //if(err) console.log(err);
            if(rows != undefined) {
        if(rows.length > 0) {
            
            return res.send("<h1>Hello admin! The Flag is CUHA{I_l_ike_sql_y_e_a_h}</h1>");
        } else {
            console.log(sql);
            return res.send("<script>alert('정답이 아닙니다');location.href='/challenge/web/web4';</script>");
        }
    } else {
        console.log(sql);
        return res.send("<script>alert('정답이 아닙니다');location.href='/challenge/web/web4';</script>");
    }
        
    });
  
}

module.exports = {
    challenge_web4,
}