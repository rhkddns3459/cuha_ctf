const router = require("express");
const User = require("../models/user");

const settings = async(req, res) => {
    const session_email = req.session.email;

    const user_info = await User.findOne({where: {email: session_email}, attributes: ["email", "nickname", "point", "solved"]});

    res.render("category/settings.ejs", 
    {session: req.session, user_info: user_info});
}

module.exports = {
    settings,
}