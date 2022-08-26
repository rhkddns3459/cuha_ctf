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

module.exports = {
    login_user,
}