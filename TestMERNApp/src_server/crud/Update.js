/*import mongoose from "mongoose";
import Connect from "./Connect"
import { User } from "../models/User";*/

var mongoose = require ("mongoose");
var Connect = require("./Connect.js");
var User = require("../models/User");

/*
User.findById(id, function( err, res) {
    if(err) throw err;
    res.email='sarvesh';
    res.save=(function(err){
        if(err) throw err;
    })
})
*/

User.findOneAndUpdate({email:'test20'}, {email: 'sarvesh'}, function(err, res) {
    if(err) throw err;
    console.log(res);
})
 
/*
User.findByIdAndUpdate(id, {email:''}, function(err, res){
    if(err) throw err;    
})
*/