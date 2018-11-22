var mongoose = require("mongoose");
var Connect = require("./Connect.js");
var User = require("../models/User");
//import mongoose from "mongoose";
//import Connect from "./Connect"
//import { User } from "../models/User";

let temp = new User({
    email: 'test25',
    password: 'fcdsv',
    firstName: 'sacfd',
    lastName: 'sacdsac'
}) 

/*
temp.test(function(err, res) {
    if(err) throw err;
    console.log('res',res);
});
*/

temp.save(function(err) {
    if(err) throw err;
    console.log('Saved')
});














