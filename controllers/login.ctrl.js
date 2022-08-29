const router = require("express");
const mysql = require("mysql2");
const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { findAll } = require("../models/user");

const email_exp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //email regExp
const password_exp = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"; //password regExp
const space_exp = /\s/g; //space regExp

const login_user = async(req, res) => {
    
    const {email, password} = req.body;

    console.log("login email = " + email);
    console.log("login password = " + password);

    if(email.match(email_exp) === null || email.match(space_exp) != null){
        res.send("<script>alert('지정된 이메일 형식을 사용하세요. 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/login';</script>");
    };

    if(password.match(password_exp) === null || re_password.match(password_exp === null) || email.match(space_exp) != null){
        res.send("<script>alert('비밀번호 형식은 알파벳, 숫자, 특수문자 포함입니다. 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/login';</script>");
    };

    try{
        const ex_user = await User.findAll({where: {email, password}});
        console.log("password = " + ex_user.password);
        if(ex_user.email === email && ex_user.password === password){
            console.log(ex_user);
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


