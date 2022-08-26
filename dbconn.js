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