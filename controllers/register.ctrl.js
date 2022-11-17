const { Router } = require("express");
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const User = require("../models/users");
const email_exp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //email regExp
const email_length_exp = /(.){1,40}/i;
const password_exp =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,18}$/; //password regExp
const alphabet_exp = /^[a-zA-Z]*$/; //alphabet regExp
const space_exp = /\s/g; //space regExp
const student_number_exp = /^[0-9]{8,10}$/;
    const create_user = async(req, res) => {
        const {email, password, re_password, nickname, student_number} = req.body;

        console.log(email);
        console.log(password);
        console.log(re_password);
        console.log(nickname);
        console.log(student_number);

        if(email.match(email_exp) === null || email.match(space_exp) !== null || email.length > 40){
            return res.send("<script>alert('지정된 이메일 형식을 사용하세요. 1~40자리 값만 허용합니다. 또한 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/register';</script>");
        };

        if(student_number.match(student_number_exp) === null){
            return res.send("<script>alert('학번은 숫자 형태의 8~10자리 값만 허용합니다.');location.href='/register';</script>");
         }

        if(nickname.match(alphabet_exp) === null || email.match(space_exp) !== null){
            return res.send("<script>alert('닉네임은 알파벳만 허용합니다. 또한 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/register';</script>");
        };

        if(password.match(password_exp) === null || re_password.match(password_exp) === null || password.match(space_exp) !== null || re_password.match(space_exp) !== null){
            return res.send("<script>alert('비밀번호 형식은 숫자, 문자, 특수문자 포함 형태의 8~18자리 값만 허용됩니다. 또한 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/register';</script>");
        };

        if(password !== re_password || email.match(space_exp) !== null){
            return res.send("<script>alert('비밀번호가 일치하지 않습니다.');location.href='/register';</script>");
        };

        try{
            const exUser1 = await User.findOne({ where: {email: email}});
            const exUser2 = await User.findOne({ where: {nickname: nickname}});
            const exUser3 = await User.findOne({ where: {student_number: student_number}});
            if (exUser1 !== null) {
                return res.send("<script>alert('중복된 이메일이 있습니다.');location.href='/register';</script>");
            }

            if (exUser2 !== null) {
                return res.send("<script>alert('중복된 닉네임이 있습니다.');location.href='/register';</script>");
            }

            if (exUser3 !== null) {
                return res.send("<script>alert('중복된 학번이 있습니다.');location.href='/register';</script>");
            }

            console.log("exUser is" + exUser1);

            if(exUser1 || exUser2 || exUser3 === null ){
                bcrypt.hash(password, 10, (err, password) => {
                User.create({
                    email: email,
                    nickname: nickname,
                    student_number: student_number,
                    password: password,
                });
                })
                return res.send("<script>alert('회원가입 되었습니다.');location.href='/';</script>");
            }else{
                return res.send("<script>alert('중복된 정보가 있습니다.');location.href='/register';</script>");
            }
            }catch(err){
                console.log(err);
                return res.send("<script>alert('오류가 발생했습니다.');location.href='/register';</script>");
            }
        }

module.exports = {
    create_user,
};