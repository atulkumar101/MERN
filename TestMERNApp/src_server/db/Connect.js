import mongoose from 'mongoose';
import { MONGO_URL } from '../config';

mongoose.connection.on('connected', function(){
    console.log("Mongoose default connection is connected to ", MONGO_URL);
});

mongoose.connection.on('open', function(){
    console.log("Mongoose default connection is open to ", MONGO_URL);
});

mongoose.connection.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+" error");
});

mongoose.connection.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0)
    });
});

module.exports = mongoose.connect(MONGO_URL, { useNewUrlParser: true }, function (err) {
    
    if (err) throw err;
    
    console.log('Successfully Connected');
    
});

mongoose.set('useCreateIndex', true);