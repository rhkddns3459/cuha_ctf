const router = require("express");
const User = require("../models/users");


const profile = async(req, res) => {
    try{
        const user_email = req.session.email;
        const user_profile =  await User.findOne({where: {email: user_email}});
        console.log(user_profile)
        res.render("members/profile.ejs", {session: req.session, profile: user_profile});
        
    }catch(err){
        console.log(err);
    }
};

module.exports = {
    profile,
}