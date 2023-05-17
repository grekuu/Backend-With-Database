var express = require('express');
var mysql = require('mysql');
var cors = require('cors');

var app = express();
var port = 4200;

app.use(cors())

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "zadanie_08"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

app.get('/', function(req, res) {
  con.query("SELECT * FROM `table`", function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, function() {
  console.log("Server is running on port " + port);
});
