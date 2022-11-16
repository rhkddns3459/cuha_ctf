const router = require("express");

const mysql = require('mysql2');



const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'cuha_ctf',
    dateStrings: "date",
});

const challenge_web3 = async(req, res) => {
    const {id,pw} = req.body;

    const params = [id];
    
    if(id == "guest" || id == "no") 
        return res.send("<h1>You are not admin!</h1>");
   
    const sql = connection.query('SELECT * FROM Web3 where id =' + "'" + params + "'", function(err, rows) {
        if(err) console.log(err);
            if(rows != undefined) {
        if(rows.length > 0) {
            console.log(sql);
            res.send("<h1>Hello admin! The Flag is CUHA{e_a_s_y_Pea_s_y}</h1>");
        } else {
            console.log(sql);
            res.send("<script>alert('정답이 아닙니다');location.href='/challenge/web/web3';</script>");
        }
    } else {
        console.log(sql);
        res.send("<script>alert('정답이 아닙니다');location.href='/challenge/web/web3';</script>");
    }
        
    });
  
}

module.exports = {
    challenge_web3,
}