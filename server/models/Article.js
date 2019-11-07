const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Why no title?'],
    minlength: 3,
    maxlength: 200
  },
  subtitle: {
    type:String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  time_created: {
    type: Date,
    required: true,
    min: '2018-01-01'
  },
  time_updated: {
    type: Date,
    min: '2018-01-01'
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = Article = mongoose.model('Article', ArticleSchema);
