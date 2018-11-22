//var mongoose = require ("mongoose");
var Connect = require("./Connect");
var User = require("../models/User");
var Product = require("../models/Product");

Product.find({}, function(err,res) {
    if(err) throw err;
    console.log(res);
})
/*   
User.find({email: ''}, function(err, res) {
    if(err) throw err;   
})
   
User.findById(1, function(err, res) {
    if(err) throw error;   
})

User.find({}).where('').gt('').exec(function(err, res) {
   if(err) throw err;
})
*/ 
   