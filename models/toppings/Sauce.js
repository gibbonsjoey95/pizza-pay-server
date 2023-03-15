const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sauceSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name must be provided'],
  },
  active: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Sauce', sauceSchema);
