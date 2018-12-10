 var express = require('express');
 var app = express();

 var path = require('path');

 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.text());

/*
 var mysql = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'test'
 });

 connection.connect();

 connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
   if (err) throw err

   console.log('The solution is: ', rows[0].solution);
 });

 connection.end();
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/get',function(req,res,next) {
  var request=req.query;
  console.log('get',request);

  var obj = { "name":"get", "age":30, "city":"New York"};
  var myJSON = JSON.stringify(obj);
  res.send(myJSON);
});

app.get('/testget/:text',function(req,res,next) {
  var request=req.params.text;
  console.log('testget',request);

  var obj = { "name":"testget", "age":30, "city":"New York"};
  var myJSON = JSON.stringify(obj);
  res.send(myJSON);
});

app.post('/testpost',function(req,res,next) {
  var request=req.body;
  console.log('testpost',request);

  var obj = { "name":"testpost", "age":30, "city":"New York"};
  var myJSON = JSON.stringify(obj);
  res.send(myJSON);
});

app.post('/post',function(req,res,next) {
  var request=req.body;

  console.log('post',request);
  res.send('post');
});

app.get('/',function(req,res,next) {
  res.sendFile(path.join(__dirname, '/reactapp/public', 'index.html'));
});

app.listen(1827);
