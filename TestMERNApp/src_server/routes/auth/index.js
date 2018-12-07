import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.text());
router.use(bodyParser.urlencoded({extended: false}));

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import * as config from '../../config/index.js';
import { verifyGmail } from "../../util";

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

/**
 * /auth/login
 */
router.post(config.SIGNIN_URL, function(req, res) {
    console.log('login', req.body);
    User.findOne({ 
        email: req.body.email 
    }, 
    function(err, user) {
        if(err) 
            return res.status(500).json({auth: false, err: err.errmsg.toString()});
        if(!user) 
            return res.status(404).json({auth: false, err: 'User Not Found.'});

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if(!passwordIsValid) 
            return res.status(401).json({auth: false, err: 'Password Not Valid.'});
        
        const token = jwt.sign({id:user._id}, config.SECRET, {/*expiresIn: 86400*/});
        res.status(200).json({auth: true, msg:'Success', token: token});
    });
});

/**
 * /auth/register
 */
router.post(config.SIGNUP_URL, function(req,res) {
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
            return res.status(500).json({auth: false, err: err.errmsg.toString()});
        const token = jwt.sign({id:user._id}, config.SECRET, {/*expiresIn:86400*/});
        res.status(200).json({auth: true, msg:'Success', token: token});
    });
});

/**
 * /auth/gmail
 */
router.post(config.GMAIL_URL, function (req,res) {
    verifyGmail(req)
    .then(()=>{
        //req.session.auth = {TokenID: request.TokenID};
        res.status(200).send('Successfully Login Through Gmail.');
    })
    .catch(()=> {
        res.status(404).send('Something Went Wrong.');
    });
});

/**
 * /auth/logout
 */
router.get(config.LOGOUT_URL, function(req,res) {
    //delete req.session.auth;
    res.status(200).send({auth: false, token: null});
});

/**
 * 
 */
router.get('/check-session', function (req, res) {
    if (req.session && req.session.auth && req.session.auth.UserID) {
        res.send('You are logged in:' + req.session.auth.UserID.toString());
    }
    else {                  
        res.send('You are ! logged in');
    }
 });

/**
 * 
 */
router.get('/create-session', function (req, res) {
    req.session.auth= {UserID: 'test session'};
    res.send('Created Session');
});

module.exports = router;
/*
    var salt = crypto.randomBytes(128).toString('hex');
    var dbString = hash(passwordS, salt);
    
    pool.query('INSERT INTO "user" (username, password, email) VALUES ($1, $2, $3)', [usernameS, dbString,  emailS], function(err, result) {
    if(err) {
        res.status(500).send(err.toString());
    }
    else {
        res.send('User Successfully Registered:');
    }
 
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
*/