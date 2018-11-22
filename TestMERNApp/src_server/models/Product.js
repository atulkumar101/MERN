var mongoose = require('mongoose'); 

const Product = new mongoose.Schema({  
  name: { type: String, trim: true, required:true },
  price: { type: Number, required:true },
  rating: { type: Number, required:true },
  category: { type: String, trim: true, required:true },
  quantity: { type: Number, required: true },
  img: { type: String, trim: true, required:true },
  desc: { type: String, trim: true, required:true },
  /*meta:*/
});

module.exports = mongoose.model('Product', Product);
