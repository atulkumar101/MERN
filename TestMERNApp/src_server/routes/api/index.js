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

import * as config from '../../config';
import { verifyToken } from '../../util/index';

var Connect = require("../../db/Connect");
var Product = require("../../models/Product");

const token = jwt.sign(config.PAYLOAD, config.SECRET, {
    //expiresIn: 86400 // expires in 24 hours
});
console.log(token);

/**
 * /api/product 
 */
router.get(config.PRODUCT_URL, verifyToken, (req,res) => {
    Product.find({}, function(err,db){
        if(err) 
            res.status(500).send(err.toString());
        
        res.json(db);
    });
});

/**
 * /api/search?id=
 */
router.get(config.SEARCH_URL, verifyToken, (req,res) => {
    const id=req.query.id;
    console.log(id);
    Product.findById(id, function(err,db){
        if(err) 
            res.status(500).send(err.toString());
        
        res.json(db);
    });
});

/**
 * /api/category?cat=
 */
router.get(config.CATEGORY_URL, verifyToken, (req,res) => {
    const cat=req.query.cat;
    console.log(cat);
    Product.find({category:cat}, function(err,db){
        if(err) 
            res.status(500).send(err.toString());
        
        res.json(db);
    });
});

/**
 * /api/rating?rat=
 */
router.get(config.RATING_URL, verifyToken, (req,res) => {
    const rat=parseInt(req.query.rat);
    console.log(rat);
    Product.find({rating: rat}, function(err,db){
        if(err) 
            res.status(500).send(err.toString());
        
        res.json(db);
    });
});

/**
* /api/price?order=-1 ASC
* /api/price?order=1 DESC
*/
router.get(config.PRICE_URL, verifyToken, (req,res) => {
    const order=parseInt(req.query.order);
    console.log(order);
    Product.find({}, null, {sort: {price: order}}, function(err,db){
        if(err) 
            res.status(500).send(err.toString());
    
        res.json(db);
    });
});

/**
 * /api/range?low=&up=
 */
router.get(config.RANGE_URL, verifyToken, (req,res) => {
    const low=parseInt(req.query.low);
    const up=parseInt(req.query.up);
    console.log(low, up);
    Product.find({price:{$gt:low, $lt: up} }, function(err,db){
        if(err) 
            res.status(500).send(err.toString());
        
        res.json(db);
    });
});

/**
 * /api/pagination?skip=&limit=
 */
router.get(config.PAGINATION_URL, verifyToken, (req,res) => {
    const limit=parseInt(req.query.limit);
    const skip=req.query.skip*limit;
    console.log(limit, skip);
    Product.find({}, null, {skip:skip, limit:limit}, function(err,db) {
        if(err) 
            res.status(500).send(err.toString());
        
        res.json(db);
    });
});

/**
 * /api/checkout
 */
router.get(config.CHECKOUT_URL, verifyToken, (req,res) => {
    console.log('Checkout');
    
    res.send('CHECKOUT');
});

module.exports = router;
