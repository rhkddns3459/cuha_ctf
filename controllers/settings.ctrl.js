const router = require("express");
const User = require("../models/users");
const password_exp =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,18}$/; //password regExp
const alphabet_exp = /^[a-zA-Z]*$/; //alphabet regExp
const space_exp = /\s/g; //space regExp
const email_exp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //email regExp
const student_number_exp = /^[0-9]{10,10}$/;
const bcrypt = require("bcrypt");
const settings = async(req, res) => {
    const {password, re_password, nickname, email, student_number} = req.body;
    const session_email = req.session.email;
    const session_password = req.session.password;
    const session_student_number = req.session.student_number;

    // if(email !== session_email){
    //     return res.send("<script>alert('허용되지 않은 접근입니다.');location.href='/settings';</script>");
    //  };
    const user_info = await User.findOne({where: {email: session_email}, attributes: ["email", "nickname", "point", "solved"]});

    if(session_email !== req.body.email){
      
        return res.send("<script>alert('이메일은 수정할 수 없습니다.');location.href='/settings';</script>");
    };

    if(nickname.match(alphabet_exp) === null){
        return res.send("<script>alert('닉네임은 알파벳만 허용합니다. 또한 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/settings';</script>");
    };

    if(password.match(password_exp) === null || re_password.match(password_exp) === null || password.match(space_exp) !== null || re_password.match(space_exp) !== null){
        return res.send("<script>alert('비밀번호 형식은 숫자, 문자, 특수문자 포함 형태의 8~18자리 값만 허용됩니다. 또한 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/settings';</script>");
    };

    if(password !== re_password) {
        return res.send("<script>alert('비밀번호가 일치하지 않습니다.')</script>")
    };

    if(student_number.match(student_number_exp) === null){
        return res.send("<script>alert('학번은 숫자만 허용되며, 10자릿수입니다.')</script>");
    } 

    await User.update({nickname: req.body.nickname}, {where: {email:session_email}});
    await User.update({student_number: req.body.student_number}, {where: {email:session_email}});
   
    bcrypt.hash(password, 10, (err, password) => {
        User.update({password: password}, {where: {email:session_email}});
    });

    res.redirect("/")

}

module.exports = {
    settings,
}