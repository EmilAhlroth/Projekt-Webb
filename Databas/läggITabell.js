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
var sql = "INSERT INTO bild (id, source) VALUES ?";
var values = [
  ['1', './static/img/Bild1.jpg'],
  ['2', './static/img/Bild2.jpg'],
  ['3', './static/img/Bild3.jpg'],
  ['4', './static/img/Bild4.jpg'],
  ['5', './static/img/Bild5.jpg'],
  ['6', './static/img/Bild6.jpg'],
  ['7', './static/img/Bild7.jpg'],
  ['8', './static/img/Bild8.jpg']
];
con.query(sql, [values], function (err, result) {
if (err) throw err;
console.log("Number of records inserted: " + result.affectedRows);
});

});
