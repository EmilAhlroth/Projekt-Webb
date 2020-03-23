


var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "bilder"
});

/* Lägger in alla värden i tabellen på phpMyAdmin */
con.connect(function(err) {
if (err) throw err;
console.log("Anslutningen Lyckades!");
var sql = "INSERT INTO bild (Id, namn) VALUES ?";

var values = [0, LOAD_FILE('220.jpg')];

con.query(sql, [values], function (err, result) {
if (err) throw err;
console.log("Number of records inserted: " + result.affectedRows);
});

});
