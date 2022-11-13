const express = require("express");
const router = express.Router();
const controller = require("../controllers/settings.ctrl");
const User = require("../models/users");


router.get("/", async(req, res) => {
    try{
    const user_settings = await User.findOne({where: {email: req.session.email}});
    res.render("members/settings.ejs", {session: req.session, settings: user_settings});
    console.log(user_settings)
}catch(err){
    console.log(err);
}
});

router.post("/submit", controller.settings);


module.exports = router;