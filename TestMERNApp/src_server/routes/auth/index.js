import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.text());
router.use(bodyParser.urlencoded({extended: false}));

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import * as config from '../../config/index.js';
import { verifyGmail, verifyToken } from "../../utils";


var Connect = require("../../db/Connect");
var User = require("../../models/User");

/*
import cookieParser from 'cookie-parser';
import session from 'express-session';

router.use(cookieParser());
router.use(session({
    secret: config.SECRET,
    cookie: { maxAge: 86400 }, //1000 * 60 * 60 * 24 * 30 Millisec 
    saveUninitialized: true
}));
*/


router.post('/login', function(req, res) {
    console.log('login', req.body);
    User.findOne({ 
        email: req.body.email 
    }, 
    function(err, user) {
        if(err) 
            return res.status(500).send('Server Error !');
        if(!user) 
            return res.status(404).send('User Not Found !');

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if(!passwordIsValid) 
            return res.status(401).json({auth: false, token: null});
        
        const token = jwt.sign({id:user._id}, config.SECRET, {/*expiresIn: 86400*/});
        res.status(200).json({auth: true, token: token});
    });
});


router.post('/register', function(req,res) {
    console.log('register',req.body);

    const hashedPassword = bcrypt.hashSync(req.body.password,8);
    
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        type: 'local'
    }, 
    function(err, user) {
        if(err) 
            return res.status(500).send(err);
        const token = jwt.sign({id:user._id}, config.SECRET, {/*expiresIn:86400*/});
        res.status(200).json({auth: true, token: token});
    });
});




router.post('/login-gmail', function (req,res) {
    const request=req.body;
    console.log('login-gmail');
    //console.log("ID: " + request.ID); // Don't send this directly to your server!
    //console.log('Full Name: ' + request.FullName);
    //console.log('Given Name: ' + request.GivenName);
    //console.log('Family Name: ' + request.FamilyName);
    //console.log("Image URL: " + request.ImageUrl);
    //console.log("Email: " + request.Email);
    //console.log("ID Token: " + request.IDToken);

    verifyGmail(request)
    .then(()=>{
        //req.session.auth = {TokenID: request.TokenID};
        res.status(200).send('Account Created !');
    })
    .catch(()=> {
        res.status(404).send('Something Went Wrong !');
    });

    try {
      //signin.user.push({"email":request.email, "pass":request.password});
      //res.json(respond);      
    }
    catch(err) {
    }
});


//router.get('/about-me',VerifyToken,function(req,res,next) {
//    User.findById(req.userId, { /*password: 0*/ }, function (err, user) {
//        if (err) return res.status(500).send("There was a problem finding the user.");
//        if (!user) return res.status(404).send("No User Found.");
//        res.status(200).send(user);
//    });
//});


router.get('/check-session', function (req, res) {
    if (req.session && req.session.auth && req.session.auth.UserID) {
        res.send('You are logged in:' + req.session.auth.UserID.toString());
    }
    else {                  
        res.send('You are ! logged in');
    }
 });


router.get('/create-session', function (req, res) {
    req.session.auth= {UserID: 'test session'};
    res.send('Created Session');
});

router.get('/logout', function(req,res) {
    delete req.session.auth;
    res.status(200).send({auth: false, token: null});
});

module.exports = router;
