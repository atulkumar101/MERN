var mongoose = require("mongoose");
var Connect = require("./Connect");
var User = require("../models/User");

/*
User.find({email = ''}, function(err,res) {
    if(err) throw err;
 
    res.remove(function(err) {
        if(err) throw err;
    })
});
*/

User.findOneAndRemove({_id : '5bbf43be76fe5d34aa987c61'}, function(err) {
    if(err) throw err;
});

/*
User.findByIdAndRemove(id, function(err) {
    if(err) throw err;
});
*/