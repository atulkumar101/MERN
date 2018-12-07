import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.text());
router.use(bodyParser.urlencoded({extended: false}));

import * as config from '../../config/index.js';
import { verifyToken } from "../../util";

var Connect = require("../../db/Connect");
var User = require("../../models/User");

/**
 * /user/profile
 */
router.get(config.PROFILE_URL,verifyToken,function(req,res,next) {
    const id = req.decoded.id;
    console.log(id);
    User.findById(id, function (err, user) {
        if (err) 
            return res.status(500).send(err);
        if (!user) 
            return res.status(404).send("No User Found.");
        
        res.status(200).send(user);
    });
});

/*
router.get('/index',function(req,res) {
    res.sendFile(path.join(__dirname, '/reactapp/public', 'index.html'));
});
*/

import {test} from '../../controllers';
router.get('/test', test);

module.exports = router;
