var mysql = require('mysql');
var fs = require('fs');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "bilder"
});

// Väljer alla värden från tabellen och lägger in dem i variablen Result
con.connect(function(err) {
if (err) throw err;
  con.query("SELECT * from bild", function (err, result, fields) {
    if(err)throw err;



/* Här är alla värden som finns i tabellen, varje värde exporteras till server.js så att de går att avnända i index.ejs */

    module.exports.result = result;

  });
})
