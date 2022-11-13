const express = require('express');
const mysql = require('mysql');

// create Connection
const db = mysql.createConnection({
    host :'http://127.0.0.1:3000',
    user : 'root',
    password: '123456'
    
});

//connect
db.connect((err)=>{
   if(err){
    throw err;
   }
   console.log('Mysql Connected ...');
});

const app = express();

// create DB

app.get('/createDB', (req, res)=>{
   let sql = 'CREATE DATABASE nodemysql';
   db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database Created');
   });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});