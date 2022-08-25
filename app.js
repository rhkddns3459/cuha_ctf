const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const session = require("express-session");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const fs = require('fs');
var http = require('http');
var url = require('url');
const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'cuha_ctf',
    dateStrings: "date",
});

connection.connect(function(err){
    if (err) throw err;
    console.log("You are connected");
});

dotenv.config();

app.set("port", process.env.PORT || 3000);

const indexRouter = require("./routes");
const registerRouter = require("./routes/register");

//const userRouter = require("./routes/user");

app.set('view engine', "ejs");

sequelize.sync({force: false})
    .then(() => {
        console.log("데이터베이스 연결 성공");
        
    })
    .catch((err) => {
        console.error(err);
    });


app.use(express.static("views")); //view -> css 사용
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


app.use("/", indexRouter);
app.use("/register", registerRouter);

app.use((req, res, next) => {
    res.status(404).send("Not found");
});

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트 실행중");
});

