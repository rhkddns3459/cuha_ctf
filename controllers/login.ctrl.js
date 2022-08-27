const router = require("express");
const mysql = require("mysql2");
const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { findAll } = require("../models/user");

/*const login_user = (req, res) => {
const param = [req.body.email, req.body.password];
connection.query('select * from user where email=?', param[0], function(error, row){
    
    const {email, password} = req.body;

    console.log(email);
    console.log(password);

    if (error) throw error;
    console.log(row[0]);
    if (row.length > 0) {
        bcrypt.compare(param[1], row[0].password, (error, result) => {
            if(result) {
                passport.serializeUser(function(user, done) {
                    done(null, user.email);
                });
                res.send("<script>alert('로그인 성공');location.href='/';</script>");
            } else {
                res.send("<script>alert('로그인 실패');location.href='/login';</script>");
            }
            });
         } else {
            res.send("<script>alert('email이 존재하지 않습니다');location.href='/login';</script>");
        }
    })
 
}*/

const login_user = async(req, res) => {
    
    const {email, password} = req.body;
    try{
        const exUser = await User.findAll({});
        console.log("password = " + exUser.password);
        if(exUser.email === email && exUser.password === password){
            console.log(exUser);
            return res.redirect("/");
        }else{
            res.render("../views/common/sql_error/login_err.ejs");
        }
    }catch(err){
        console.log(err);
        res.send("<script>alert('오류가 발생했습니다.')</script>");
    }
     
    }

module.exports = {
    login_user,
}

