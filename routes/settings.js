const express = require("express");
const router = express.Router();
const controller = require("../controllers/settings.ctrl");

router.get("/", (req, res) => {
    res.render("category/settings.ejs" , {session: req.session});
});

router.post("/submit", controller.settings);


module.exports = router;