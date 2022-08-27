const { Router } = require("express");
const mysql = require("mysql2");
const bcrypt = require('bcrypt');
const User = require("../models/user");
const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    /*const create_user = (req, res) => {
        const { email, password, re_password , nickname } = req.body;
        const point = 0;

        console.log(email);
        console.log(password);
        console.log(re_password);
        console.log(nickname);

        bcrypt.hash(password, 10, (err, password) => {
            const sql = 'INSERT INTO user(email, password, nickname, point) VALUES(?,?,?,?)';
            const params = [email, password, nickname, point];
    
            connection.query(sql, params, function(err, rows, fields){
                if(err){
                    console.log(err);
                } else{
                    res.redirect("/");
                }
            });    
        })
    
    
    }*/

    const create_user = async(req, res) => {
        const {email, password, re_password, nickname, team} = req.body;

        console.log(email);
        console.log(password);
        console.log(re_password);
        console.log(nickname);

        try{
            const exUser = await User.findOne({ where: {email}});

            console.log(exUser);

            if(exUser === null){
                if(password == re_password) {
                   

                   
                bcrypt.hash(password, 10, (err, password) => {
                User.create({
                    email: email,
                    nickname: nickname,
                    password: password,
                    team: team,
                  });
                })
                res.redirect("/");
            }else{
                
            res.send("<script>alert('비밀번호가 맞지 않습니다.');location.href='/register';</script>");
            }
        }else{
                res.send("<script>alert('중복된 정보가 있습니다.');location.href='/register';</script>");
            }
            }catch(err){
                console.log(err);
                res.send("<script>alert('오류가 발생했습니다.');location.href='/register';</script>");
            }
        }




module.exports = {
    create_user,
};