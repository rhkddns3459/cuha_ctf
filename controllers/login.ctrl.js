const router = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'root',
    database    : 'cuha_ctf',
    dataStrings : "data",
})
/*
const login_user = (req,res) => {
    const {email, password} = req.body;

    console.log(email);
    console.log(password);

    bcrypt.hash(password, 10, (err, password) => {
        const sql = 'SELECT * FROM user where VALUES(?,?)';
        const params = [email, password];

        console.log(email);
        console.log(password);
        
        connection.query(sql, params, function(err, rows, fields){
            if(err){
                console.log(err);
                res.redirect("/login");
            } else {
                res.redirect("/");
            }
        })
    })
}

*/

const login_user = (req,res) => {
const param = [req.body.email, req.body.password];
connection.query(' select *from user where email=?',param[0],function(error, row) {
    
    const {email, password} = req.body;

    console.log(email);
    console.log(password);

    if (error) throw error;
    console.log(row[0]);
    if (row.length > 0) {
        bcrypt.compare(param[1],row[0].password,(error, result)=>{
            if(result) {
                res.send("<script>alert('로그인 성공');location.href='/';</script>");
            } else {
                res.send("<script>alert('로그인 실패');location.href='/login';</script>");
            }
            });
         } else {
            res.send("<script>alert('email이 존재하지 않습니다');location.href='/login';</script>");
        }
    })
 
}
module.exports = {
    login_user,
}

