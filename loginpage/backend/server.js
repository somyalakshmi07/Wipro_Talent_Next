const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup'})

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).send('Error inserting data');
    }
    return res.status(200).send('Data inserted successfully');
  });
});

app.post('/login', (req, res) => {
  const sql = "select * from login where email = ? and password = ?";
  const values = [req.body.email, req.body.password];
  db.query(sql, values, (err, result) => {
    if (err) {
      return res.json('Error in login');
    }
    if (result.length > 0) {
      return res.json('success');
    } else {
      return res.json('failed');
    }
  });
});

app.listen(8081,() => {
  console.log("listening on port 8081");
})