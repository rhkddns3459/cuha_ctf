const router = require("express");
const Already_solved  = require("../models/already_solved");
const Flag = require("../models/flag");
const User = require("../models/users");
const challenge_flag = async(req, res) => {
    const user_flag = req.body.flag;
    const user_type = req.body.type;
    const user_correct = await User.findOne({where: {email: req.session.email}});
    const flag_correct = await Flag.findOne({where: {type: user_type},raw:true});
    const user_already = await Already_solved.findOne({where: {nickname:req.session.nickname,type:user_type},raw:true});
        console.log(user_already);
if(user_already === null) {
    if(flag_correct.flag === user_flag) {
        point_num = user_correct.point + flag_correct.point
        solved_num = user_correct.point + 1
        User.update({
            point: point_num,
            solved: solved_num,
          }, {
            where: { email: req.session.email }
          });

          Already_solved.create({
            nickname:req.session.nickname,
            type: user_type,
          });

        console.log(flag_correct.point);
        res.send("<script>alert('정답입니다.');location.href='/';</script>");
       
    } else {
        //console.log(flag_correct[0]);
        console.log(flag_correct);
        res.send("<script>alert('오답입니다.');location.href='/';</script>");
    }
} else {
    res.send("<script>alert('이미 푼 문제입니다.');location.href='/';</script>");
}
}
    
       
    
    



module.exports = {
    challenge_flag,
}