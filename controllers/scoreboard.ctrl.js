const router = require("express");
const User = require("../models/user");

const team_rank = async(req, res) => {
    try{
        const user_info = await User.findAll({ 
            limit: 3,
            order:[
                ['point', "DESC"],
            ] });
            console.log(user_info);
            res.render("category/scoreboard.ejs", {session: req.session})
    }catch(err){
        console.log("scoreboard 에러가 발생했습니다." + err);
    }
}

const user_rank = async(req, res) => {
    try{
        const user_info = await User.findAll({ 
            limit: 3,
            order:[
                ['point', "DESC"],
            ] });
            console.log(user_info);
            res.render("category/scoreboard.ejs", {session: req.session})
    }catch(err){
        console.log("scoreboard 에러가 발생했습니다." + err);
    }
}

module.exports = {
    user_rank,
    team_rank,
}