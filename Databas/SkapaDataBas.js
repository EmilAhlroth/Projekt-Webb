var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: ""
});


// Skapar en databas som heter Bilder. Den ska innehålla alla Bilder.
con.connect(function(err) {
if (err) throw err;
console.log("Lyckades!");
con.query("CREATE DATABASE Bilder", function (err, result) {
if (err) throw err;
console.log("Database Skapades");
});
});
