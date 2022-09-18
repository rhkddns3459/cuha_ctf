const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const mysql = require("mysql2");
const app = express();
const file_store = require("session-file-store")(session);

dotenv.config();

const indexRouter = require("./routes");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login")

app.set("port", process.env.PORT || 3000);
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
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: 'SECRET',
      cookie: {
        httpOnly: true,
        secure: false,
      },
      store: new file_store()
    }, 
  ));

app.use("/", indexRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);

app.use((req, res, next) => {
    res.status(404).send("Not found");
});
app.use('/public', express.static('public'));
app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트 실행중");
});