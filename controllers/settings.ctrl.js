const router = require("express");
const User = require("../models/users");
const password_exp =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,18}$/; //password regExp
const alphabet_exp = /^[a-zA-Z]*$/; //alphabet regExp
const space_exp = /\s/g; //space regExp
const email_exp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; //email regExp
const bcrypt = require("bcrypt");
const settings = async(req, res) => {
    const {current_password, new_password, nickname, email} = req.body;
    const session_email = req.session.email;
    const session_password = req.session.password;

    // if(email !== session_email){
    //     return res.send("<script>alert('허용되지 않은 접근입니다.');location.href='/settings';</script>");
    //  };
    const user_info = await User.findOne({where: {email: session_email}, attributes: ["email", "nickname", "point", "solved"]});

    if(session_email != req.body.email){
      
        return res.send("<script>alert('이메일은 수정할 수 없습니다.');location.href='/login';</script>");
    };

    if(nickname.match(alphabet_exp) === null){
        return res.send("<script>alert('닉네임은 알파벳만 허용합니다. 또한 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/settings';</script>");
    };

    if(current_password.match(password_exp) === null || new_password.match(password_exp) === null || current_password.match(space_exp) !== null || new_password.match(space_exp) !== null){
        return res.send("<script>alert('비밀번호 형식은 숫자, 문자, 특수문자 포함 형태의 8~18자리 값만 허용됩니다. 또한 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/settings';</script>");
    };


    bcrypt.compare(current_password,user_info.password,(error, result)=>{
        if(!result) {
            return res.send("<script>alert('현재 비밀번호가 일치하지 않습니다.');location.href='/settings';</script>");
        } 
    })

    

    await User.update({nickname: req.body.nickname}, {where: {email:session_email}});

   
    bcrypt.hash(new_password, 10, (err, new_password) => {
        User.update({password: new_password}, {where: {email:session_email}});
    });

    res.redirect("/")

}

module.exports = {
    settings,
}