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
            return res.status(500).json({auth: false, err: err.errmsg});
        if(!user) 
            return res.status(404).json({auth: false, err: 'User Not Found !'});

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if(!passwordIsValid) 
            return res.status(401).json({auth: false, err: 'Password Not Valid !'});
        
        const token = jwt.sign({id:user._id}, config.SECRET, {/*expiresIn: 86400*/});
        res.status(200).json({auth: true, msg:'Success', token: token});
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
            return res.status(500).json({auth: false, err: err.errmsg});
        const token = jwt.sign({id:user._id}, config.SECRET, {/*expiresIn:86400*/});
        res.status(200).json({auth: true, msg:'Success', token: token});
    });
});




router.post('/gmail', function (req,res) {
    verifyGmail(req)
    .then(()=>{
        //req.session.auth = {TokenID: request.TokenID};
        res.status(200).send('Account Created !');
    })
    .catch(()=> {
        res.status(404).send('Something Went Wrong !');
    });
});


router.get('/profile',verifyToken,function(req,res,next) {
    const id = req.decoded.id;
    console.log(id);
    User.findById(id, function (err, user) {
        if (err) 
            return res.status(500).send(err);
        if (!user) 
            return res.status(404).send("No User Found !");
        
        res.status(200).send(user);
    });
});


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
