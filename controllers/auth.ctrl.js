const { Router } = require("express");
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const User = require("../models/users");

const logout = async(req, res, next) => {
    req.session.destroy(function(){ 
        req.session;
        });
    res.redirect("/");
}

module.exports = {
    logout,
};