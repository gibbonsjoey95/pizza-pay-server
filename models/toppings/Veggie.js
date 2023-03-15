const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const veggieSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name must be provided'],
  },
  active: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Veggie', veggieSchema);
