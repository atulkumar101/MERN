import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.text());
router.use(bodyParser.urlencoded({extended: false}));

//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
//router.use('/', swaggerUi.serve);
//router.get('/', swaggerUi.setup(swaggerDocument));

import jwt from 'jsonwebtoken'; 

import * as config from '../../config/index.js';
import { verifyToken } from '../../utils/index';

var Connect = require("../../db/Connect");
var Product = require("../../models/Product");

import index from '../../controllers/index';

//router.get('/ppp', index.author_list);

const token = jwt.sign(config.PAYLOAD, config.SECRET, {
    //expiresIn: 86400 // expires in 24 hours
});
console.log(token);

//localhost:8090/api/product
router.get('/product', verifyToken, (req,res) => {
    Product.find({}, function(err,db){
        if(err) throw err;
        res.json(db);
    });
});

//localhost:8090/api/search?id=
router.get('/search', verifyToken, (req,res) => {
    const id=req.query.id;
    console.log(id);
    Product.findById(id, function(err,db){
        if(err) throw err;
        res.json(db);
    });
});

//localhost:8090/api/category?cat=
router.get('/category', verifyToken, (req,res) => {
    const cat=req.query.cat;
    console.log(cat);
    Product.find({category:cat}, function(err,db){
        if(err) throw err;
        res.json(db);
    });
});

//localhost:8090/api/rating?rat= 
router.get('/rating', verifyToken, (req,res) => {
    const rat=parseInt(req.query.rat)-1;
    console.log(rat);
    Product.find({rating:{$gt:rat, $lt: 6} }, function(err,db){
        if(err) throw err;
        res.json(db);
    });
});

//localhost:8090/api/price?order=-1 ASC
//localhost:8090/api/price?order=1 DESC
router.get('/price', verifyToken, (req,res) => {
    const order=parseInt(req.query.order);
    console.log(order);
    Product.find({}, null, {sort: {price: order}}, function(err,db){
        if(err) throw err;
        
        //res.send(JSON.stringify(db));
        res.json(db);
    });
});

//localhost:8090/api/pagination?skip=&limit=
router.get('/pagination', verifyToken, (req,res) => {
    const limit=parseInt(req.query.limit);
    const skip=req.query.skip*limit;
    console.log(limit, skip);
    Product.find({}, null, {skip:skip, limit:limit}, function(err,db) {
        if(err) throw err;
        res.type('json'); 
        //res.set('Content-Type', '');
        //res.setHeader('Content-Type', 'application/json');
        res.json(db);
    });
});

//localhost:8090/api/checkout
router.get('/checkout', verifyToken, (req,res) => {
    console.log('Checkout');
    res.send('CHECKOUT');
});
module.exports = router;

/*
//res.type('json'); 
//res.set('Content-Type', '');
//res.setHeader('Content-Type', '');

let signin = {
    "user": [
        {"email":"user1", "pass":"pass1"},
        {"email":"user2", "pass":"pass2"}
    ]
}
router.post('/signup',function(req,res,next) {
    var request=req.body;
    console.log('signup',request.email);
    console.log('signup',request.password);
    try {
      //signin.user.push({"email":request.email, "pass":request.password});
      res.status(200).send('Account Created');
    }
    catch(err) {
      res.status(500).send('Something Went Wrong');
    }
});

router.post('/signin',function(req,res) {
    var request=req.body;
    console.log('signin',request.email);
    console.log('signin',request.password);
    var response='Something Went Wrong';
    var promise= new Promise((resolve,reject) => {
        //throw new Error('Error1');
        let flag=-1;
        for (let i=0; i<signin.user.length;i++) {
            if(signin.user[i].email==request.email) //&& signin.user[i].pass==requst.password
            {
              flag=i;
              break;
            }
        }
        console.log('flag',flag);
        if(flag > -1 ) {
          console.log('if')
          resolve(flag);
        }
        else {
          console.log('else');
          response='Email ! Exist';
          reject(false);
        }
    })
    .then(check=> {
      console.log('check1');
      if( signin.user[check].pass==request.password)
      {
        console.log('check1 if');
        response='Signin Successful';
        req.session.auth = {username: request.email};
        res.send(response);
        return true;
      }
      response='Password ! Match';
      throw new Error('Error');
    })
    .catch(err => {
        console.log('catch',err);
        res.send(response);
    });
});
*/

/*
app.get('/get',function(req,res) {
    var request=req.query;
    console.log('get',request);

    var promise= new Promise((resolve,reject) => {
        //throw new Error('Error1');
        var val1=true;
        if(val1) {
          console.log('val1',val1);
          resolve(1);
          console.log('val1',val1);
          //res.send('val1');
        }
        else {
          console.log('err');
          reject(Error('Error Msg'));
          //res.send('Error Msg');
        }
    })
    .then(val2=> {
      //throw new Error('Error2');
      console.log('val2',val2);
      val2=val2+1;
      //res.send('val2');
      console.log('val2',val2);
      return val2;
    })
    .then(val3=> {
      //throw new Error('Error3');
      console.log('val3',val3);
      val3=val3+1;
      console.log('val3',val3);
      res.send('Successfull');
      return val3;
    //},err =>{
      //console.log('err',err);
        //return err;
    })
    .catch(err => {
        console.log('err',err,'end');
        res.send('Error');
    });
    console.log('Promise',promise);
    var response = { "status":"ok", "code":300};
    //var myJSON = JSON.stringify(response);
    //res.send(myJSON);
    //res.json(response).end();
});
*/

/*
//Post Request
app.post('/signup', function (req, res) {
    var usernameS = req.body.usernameS;
    var passwordS = req.body.passwordS;
    var emailS = req.body.emailS;
	var salt = crypto.randomBytes(128).toString('hex');
	var dbString = hash(passwordS, salt);
    pool.query('INSERT INTO "user" (username, password, email) VALUES ($1, $2, $3)', [usernameS, dbString,  emailS], function(err, result) {
    if(err) {
        res.status(500).send(err.toString());
    }
    else {
        res.send('User Successfully Registered:');
    }
  });
});

//Post Request
app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    pool.query('SELECT id, password FROM "user" WHERE username = $1', [username], function(err, result) {
    if(err) {
        res.status(500).send(err.toString());
    }
    else {
        if(result.rows.length === 0) {
            res.send(403).send('Username/Password is Invalid');
        }
        else {
           var dbString = result.rows[0].password;
           var salt = dbString.split('$')[2];
           var hashedPassword  = hash(password, salt);
           if(hashedPassword == dbString) {
            req.session.auth = {userId: result.rows[0].id};
            res.send('Credentials Correct!');
           }
           else {
            res.send(403).send('Username/Password is Invalid');
           }
        }
    }
   });
});
*/



/*
app.get('/index',function(req,res) {
    res.sendFile(path.join(__dirname, '/reactapp/public', 'index.html'));
});
app.get('/get',function(req,res) {
    var request=req.query;
    console.log('get',request);

    var obj = { "name":"get", "age":30, "city":"New York"};
    var myJSON = JSON.stringify(obj);
    res.send(myJSON);
});

app.get('/testget/:text',function(req,res) {
    var request=req.params.text;
    console.log('testget',request);

    var obj = { "name":"testget", "age":30, "city":"New York"};
    var myJSON = JSON.stringify(obj);
    res.send(myJSON);
});
app.post('/testpost',function(req,res) {
    var request=req.body;
    console.log('testpost',request);

    var obj = { "name":"testpost", "age":30, "city":"New York"};
    var myJSON = JSON.stringify(obj);
    res.send(myJSON);
});
app.post('/post',function(req,res) {
    var request=req.body;

    console.log('post',request);
    res.send('post');
});
*/
