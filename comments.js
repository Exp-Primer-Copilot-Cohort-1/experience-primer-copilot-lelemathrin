//Create web server with express
const express = require('express');
const app = express();
const port = 3000;
// Create connection to mysql
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'comments'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});
// Create route for comments
app.get('/comments', (req, res) => {
    connection.query('SELECT * FROM comments', (err,rows) => {
        if(err) throw err;
        console.log('Data received from Db:');
        console.log(rows);
        res.send(rows);
    });
});
// Listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));