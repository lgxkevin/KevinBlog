const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  name: {
    type: String
  },
  gender: {
    type: String,
  }
},{collection:'test'});

module.exports = mongoose.model('Test', TestSchema);
