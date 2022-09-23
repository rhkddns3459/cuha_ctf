const express = require("express");

const router = express.Router();
const controller = require("../controllers/challenge_flag.ctrl");
/*
router.post("/", (req, res) => {
    
    res.render("/", {flag:flag,type:type});
    
   
});

*/

router.post("/", controller.challenge_flag);

module.exports = router;