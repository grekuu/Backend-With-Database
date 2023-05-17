var express = require('express')
var mysql = require('mysql')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express()
var port = 4200

app.use(cors())
app.use(bodyParser.json())

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zadanie_08',
})

con.connect(function (err) {
    if (err) throw err
    console.log('Connected to MySQL database')
})

app.get('/', function (req, res) {
    con.query('SELECT * FROM `table`', function (err, result) {
        if (err) throw err
        res.json(result)
    })
})

app.post('/addUser', function (req, res) {
    var user = req.body

    con.query(
        'INSERT INTO `table` (autor, data_dodania, tresc) VALUES (?, ?, ?)',
        [user.autor, user.data_dodania, user.tresc],
        function (err, result) {
            if (err) throw err
            console.log('User added successfully')
            res.sendStatus(200)
        }
    )
})

app.listen(port, function () {
    console.log('Server is running on port ' + port)
})
