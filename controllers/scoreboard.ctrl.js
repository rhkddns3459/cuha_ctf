const router = require("express");
const User = require("../models/users");

const user_rank = async(req, res) => {
    try{
        const user_info = await User.findAll({ 
            limit: 3,
            order:[
                ['point', "DESC"],
            ] });
            console.log("-----------------------------------")
            console.log(user_info[0].nickname);
            res.render("challenges_category/scoreboard.ejs", {session: req.session, rank: user_info})
    }catch(err){
        console.log("scoreboard 에러가 발생했습니다." + err);
    }
}

module.exports = {
    user_rank,
}