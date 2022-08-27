const { Router } = require("express");
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const User = require("../models/user");

    /*const create_user = (req, res) => {
        const { email, password, re_password , nickname } = req.body;
        const point = 0;

        console.log(email);
        console.log(password);
        console.log(re_password);
        console.log(nickname);

        bcrypt.hash(password, 10, (err, password) => {
            const sql = 'INSERT INTO user(email, password, nickname, point) VALUES(?,?,?,?)';
            const params = [email, password, nickname, point];
    
            connection.query(sql, params, function(err, rows, fields){
                if(err){
                    console.log(err);
                } else{
                    res.redirect("/");
                }
            });    
        })
    
    
    }*/

    const create_user = async(req, res) => {
        const {email, password, re_password, nickname} = req.body;
        const point = 0;

        console.log(email);
        console.log(password);
        console.log(re_password);
        console.log(nickname);

        User.create({
            email: email,
            nickname: nickname,
            password: password,
          });

        try{
            const exUser = await User.findOne({ where: {email}});

            console.log(exUser);
            console.log(exUser.email)
            console.log(exUser.password);

            if(exUser.email === email){
                res.render("../views/common/sql_error/email_err.ejs");
            } else if(exUser.nickname === nickname) {
                res.render("../views/common/sql_error/nickname.ejs");
            } else {
                res.redirect("/");
            }
            }catch(err){
                console.log(err);
                res.send("<script>aelrt(오류가 발생했습니다.)</script>");
            }
        }




module.exports = {
    create_user,
};