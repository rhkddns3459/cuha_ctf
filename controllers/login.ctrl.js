const router = require("express");
const mysql = require("mysql2");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { findAll } = require("../models/user");

const email_exp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //email regExp
const password_exp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,18}$/; //password regExp
const space_exp = /\s/g; //space regExp

const login_user = async(req, res) => {
    
    const {email, password} = req.body;

    console.log("login email = " + email);
    console.log("login password = " + password);

    
   
    if(email.match(email_exp) === null || email.match(space_exp) != null){
        return res.send("<script>alert('지정된 이메일 형식을 사용하세요. 또한 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/login';</script>");
    };

    if(password.match(password_exp) === null || password.match(space_exp) != null){
        return res.send("<script>alert('비밀번호 형식은 숫자, 문자, 특수문자 포함 형태의 8~18자리 값만 허용됩니다. 또한 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/login';</script>");
    };

    try{
        
        const ex_user = await User.findOne({where: {email: email}});
        const pass = await bcrypt.compare(password, ex_user.password);
    if(pass) {
        if(ex_user != null){
            console.log(ex_user);
            req.session.user_id = req.body.user_id;
            req.session.is_logined = true;
            req.session.save(function() {
                return res.redirect("/");
            });
        }else{
            return res.send("<script>alert('로그인에 실패했습니다.');location.href='/login';</script>");
        }
    } else {
        return res.send("<script>alert('로그인에 실패했습니다.');location.href='/login';</script>");
    }
    }catch(err){
        console.log(err);
        res.send("<script>alert('오류가 발생했습니다.');location.href='/';</script>");
    }

    }

module.exports = {
    login_user,
}


