import mongodb from 'mongodb';
const MongoClient=mongodb.MongoClient;

const URL = "mongodb://localhost:27017/";

MongoClient.connect(URL, function (err, db) {
    if(err) throw err;
    console.log('Database Created !');

    var dbo = db.db("TestMERNDB");

    dbo.createCollection("User",function(err,res) {
        if(err) throw err;
        console.log("Collection Created !");
    })
    var myObj1 = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("Test1").insertOne(myObj1, function(err,res) {
        if(err) throw err;
        console.log("1 document inserted");
    });

    var myobj2 = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
    ];
    dbo.collection("Test1").insertMany(myobj2,function(err,res) {
        if(err) throw err;
        console.log("many document inserted: "+res.insertedCount);
        console.log(res.result,"ok:1,n:14");
        console.log(res.ops,"name: address: _id:");
        console.log(res.insertedCount);
        console.log(res.insertedIds,'[]');
    });

    dbo.collection("Test1").findOne({},function(err,res) {
        if(err) throw err;
        console.log(res.name);
    });

    dbo.collection("Test1").find({},{_id: 0, name: 1}).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        //console.log(res[2].address);
    });

    var query = { address: /^S/ };
    dbo.collection("Test1").find(query).toArray(function(err, res) {
      if (err) throw err;
      console.log(res);
    });

    db.close();
});
/*
import mongodb from 'mongodb';
const MongoClient=mongodb.MongoClient;

MongoClient.connect(MONGO_URL, function (err, db) {
    
  if (err) throw err
  var dbo = db.db("TestMERNDB");
    
  dbo.collection("PRODUCT").find({},{_id: 0, name: 1}).toArray(function(err,res){
    if(err) throw err;
    console.log(res);
    //console.log(res[2].address);
    });

    var query = { address: /^S/ };
    dbo.collection("USER").find(query).toArray(function(err, res) {
    if (err) throw err;
    console.log(res);
    });
})
*/
/*
  var myObj1 = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("Test1").insertOne(myObj1, function(err,res) {
      if(err) throw err;
      console.log("1 document inserted");
  });

  var myobj2 = [
      { name: 'John', address: 'Highway 71'},
      { name: 'Peter', address: 'Lowstreet 4'},
      { name: 'Amy', address: 'Apple st 652'},
      { name: 'Hannah', address: 'Mountain 21'},
      { name: 'Michael', address: 'Valley 345'},
      { name: 'Sandy', address: 'Ocean blvd 2'},
      { name: 'Betty', address: 'Green Grass 1'},
      { name: 'Richard', address: 'Sky st 331'},
      { name: 'Susan', address: 'One way 98'},
      { name: 'Vicky', address: 'Yellow Garden 2'},
      { name: 'Ben', address: 'Park Lane 38'},
      { name: 'William', address: 'Central st 954'},
      { name: 'Chuck', address: 'Main Road 989'},
      { name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("USER").insertMany(myobj2,function(err,res) {
      if(err) throw err;
      console.log("many document inserted: "+res.insertedCount);
      console.log(res.result,"ok:1,n:14");
      console.log(res.ops,"name: address: _id:");
      console.log(res.insertedCount);
      console.log(res.insertedIds,'[]');
  });

  dbo.collection("Test1").findOne({},function(err,res) {
      if(err) throw err;
      console.log(res.name);
  });

  dbo.collection("Test1").find({},{_id: 0, name: 1}).toArray(function(err,res){
      if(err) throw err;
      console.log(res);
      //console.log(res[2].address);
  });

  var query = { address: /^S/ };
  dbo.collection("Test1").find(query).toArray(function(err, res) {
    if (err) throw err;
    console.log(res);
  });

  db.close();
  */
/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({ 
    name: String, 
    password: String, 
    admin: Boolean 
}));


  var user = new User({ 
    name: 'Nick Cerminara', 
    password: 'password',
    admin: true 
  });
  user.save(function(err) {
    if (err) throw err;

    console.log('User saved Successfully');
    res.json({ success: true });
  });

  User.find({}, function(err, users) {
    res.json(users);
  });
  */



/*
 type:mongoose.Schema.Types.ObjectId
 ref:
 
 enum:
 default:
 
 var validator = require('validator');
 validate:(value) => {
  return validator,isEmail(value)
 }
 
 
 find().skip(100).limit(10).sort({firstName: 1}.select({firstName: true} 
 User.pre('save',funtion(next) {
  if(!this.)
  {}
 next();
 });
 */