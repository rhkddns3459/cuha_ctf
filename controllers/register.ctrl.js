const { Router } = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'cuha_ctf',
        dateStrings: "date",
    });

    connection.connect(function(err){
        if (err) throw err;``
        console.log("You are connected");
    });

const create_user = (req, res) => {
    const { email, password, re_password , nickname } = req.body;

    console.log(email);
    console.log(password);
    console.log(re_password);
    console.log(nickname);

    /* if(){
    }else{
        const sql = 'INSERT INTO user(email, password, nickname) VALUES(?,?,?)';
        const params = [email, password, nickname];

        connection.query(sql, params, function(err, rows, fields){
            if(err){
                console.log(err);
            } else{
                res.redirect("/");
            }
        });
}

    */
}



module.exports = {
    create_user,
};