const router = require("express");
const Flag = require("../models/flag");
const User = require("../models/users");
const challenge_flag = async(req, res) => {
    const user_flag = req.body.flag;
    const user_type = req.body.type;
    const user_correct = await User.findOne({where: {email: req.session.email}});
    const flag_correct = await Flag.findOne({where: {type: user_type},raw:true});
    if(flag_correct.flag === user_flag) {
        point_num = user_correct.point + flag_correct.point
        User.update({
            point: point_num
          }, {
            where: { email: req.session.email }
          });
        console.log(flag_correct.point);
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