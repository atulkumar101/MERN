var mongoose = require('mongoose');  

const User = new mongoose.Schema({  
  email: { type: String, trim: true, lowercase: true, required:true,  unique: true},
  password: { type: String, required:true },
  name: { type: String, trim: true, required:true },
  type: { type: String, trim: true, required:true },
  imageUrl: String,
});

/*
User.virtual('url').get(() => {
  return '/catalog/author/' + this._id;
});

User.methods.test = function() {
  this.password = bcrypt.hashSync(this.password,8);
  return this.password;
}

User.post('save', function(error, res, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next(); // The `update()` call will still error out.
  }
});
*/
module.exports = mongoose.model('User', User);

