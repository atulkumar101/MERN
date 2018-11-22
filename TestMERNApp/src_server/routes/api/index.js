import express from 'express';
import bodyParser from 'body-parser';

import index from '../../controllers/index';


import config from './../../config/config.js';

var Connect = require("../../db/Connect");

var Product = require("../../models/Product");

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.text());
router.use(bodyParser.urlencoded({extended: false}));

//router.get('/ppp', index.author_list);
router.get('/product', (req,res) => {
    Product.find({}, function(err,db){
        if(err) throw err;
        res.json(db);
    });
});

router.get('/test', (req,res) => {
    Product.find({}, function(err,db){
        if(err) throw err;
        res.json(db);
    });
});

module.exports = router;


/*
var token = req.body.token || req.query.token || req.headers['x-access-token'];
if (token) {
  jwt.verify(token, app.get('Secret'), function(err, decoded) {      
    if (err) {
      return res.json({ success: false, message: 'Failed to authenticate token.' });    
    } else {
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;    
      next();
    }
  });
} else {
  return res.status(403).send({ success: false, message: 'No token provided.' });
}

const payload = {
  check:  true
};

var token = jwt.sign(payload, app.get('Secret'), {
      expiresIn: 1440 // expires in 24 hours
});


res.json({
  message: 'authentication done ',
  token: token
});
*/

/*
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
