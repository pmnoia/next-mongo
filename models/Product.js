const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null }
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
