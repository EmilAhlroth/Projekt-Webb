var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "bilder"
});

// Skapar en tabell som innehåller namn, julklappen och länken till den.
con.connect(function(err) {
if (err) throw err;
console.log("Anslutningen Lyckades!");
var sql = "CREATE TABLE bild (id VARCHAR(255), source VARCHAR(255))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table Skapades");
});
});
