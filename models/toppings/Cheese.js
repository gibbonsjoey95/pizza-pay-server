const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cheeseSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name must be provided'],
  },
  active: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Cheese', cheeseSchema);
