const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  size: {
    type: String,
    required: [true, 'missing size'],
  },
  crust: {
    type: String,
    required: [true, 'missing crust type'],
  },
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  toppings: [
    {
      name: String,
    },
  ],
});

module.exports = mongoose.model('Item', itemSchema);
