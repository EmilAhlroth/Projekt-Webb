const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const multer = require('multer');
const data = require('./read.js') // LÄNK TILL FIL SOM LÄSER IN VÄRDERNA FRÅN TABELLEN

var num = 1;

// Set storage engine
const storage = multer.diskStorage({
    destination: './public/img/',
    filename: function(req, file, cb){
      cb(null, "Bild" + num + ".jpg");
      }
});

// Init upload
const upload = multer({
  storage: storage
}).single('myfile');


const app = express();
app.use('/static', express.static ('public'));

/* Index.ejs anslutes till servern och blir indexsidan */
app.get("/",function(req, res){
  res.render(__dirname + "/index.ejs",{
    result: data.result
  });
});


// Tar emot POST request från hemsidan
app.post('/img', (req, res) => {
  upload(req, res, (err) => {
    // Bilden har lagts till i /public/img

      // Lägger in bilderna till databasen

      var bld = "./static/img/" + req.file.filename
      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "bilder"
      });

      con.connect(function(err) {
        if (err) throw err;
        var sql = "UPDATE bild SET source = 'bld' WHERE id = 'num'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          num = num + 1;
        });
      });



      res.redirect('back');
  });
});

/* Servern körs på localhost 3000 */
app.listen(3000);
