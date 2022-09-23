const router = require("express");
const Flag = require("../models/flag");
const User = require("../models/users");
const challenge_flag = async(req, res) => {
    const user_flag = req.body.flag;
    const user_type = req.body.type;
    const nick = req.session.nickname;
    const user_correct = await User.findOne({where: {nickname:nick}});
    const flag_correct = await Flag.findOne({attributes: ['flag'],where: {type: user_type},raw:true});
    if(flag_correct.flag === user_flag) {
        point_num = user_correct.point + flag_correct.point
        User.update({
            point: point_num
          }, {
            where: { nickname: nick }
          });
        res.send("<script>alert('정답입니다.');location.href='/';</script>");
    } else {
        //console.log(flag_correct[0]);
        console.log(flag_correct);
        res.send("<script>alert('오답입니다.');location.href='/';</script>");
    }
    

}

module.exports = {
    challenge_flag,
}