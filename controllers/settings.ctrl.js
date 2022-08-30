const router = require("express");
const User = require("../models/user");
const password_exp =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,18}$/; //password regExp
const alphabet_exp = /^[a-zA-Z]*$/; //alphabet regExp
const space_exp = /\s/g; //space regExp

const settings = async(req, res) => {
    const {current_password, new_password, nickname} = req.body;
    const session_email = req.session.email;

    // if(email !== session_email){
    //     return res.send("<script>alert('허용되지 않은 접근입니다.');location.href='/settings';</script>");
    // };

    if(nickname.match(alphabet_exp) === null){
        return res.send("<script>alert('닉네임은 알파벳만 허용합니다. 또한 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/settings';</script>");
    };

    if(current_password.match(password_exp) === null || new_password.match(password_exp) === null || current_password.match(space_exp) !== null || new_password.match(space_exp) !== null){
        return res.send("<script>alert('비밀번호 형식은 숫자, 문자, 특수문자 포함 형태의 8~18자리 값만 허용됩니다. 또한 공백, 띄어쓰기는 허용하지 않습니다.');location.href='/settings';</script>");
    };

    if(current_password != new_password){
        return res.send("<script>alert('비밀번호가 일치하지 않습니다.');location.href='/settings';</script>");
    };

    const user_info = await User.findOne({where: {email: session_email}, attributes: ["email", "nickname", "point", "solved"]});

    await User.update({nickname: req.body.nickname}, {where: {email:session_email}});
    await User.update({password: req.body.password}, {where: {email:session_email}});

    res.redirect("/")

}

module.exports = {
    settings,
}