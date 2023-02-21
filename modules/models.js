const { mongoose } = require('mongoose');

const CategorySchema = new mongoose.Schema({
  title: String,
});
const Category = mongoose.model('Category', CategorySchema);

const MovieSchema = new mongoose.Schema({
  title: String,
  category: { type: 'ObjectId', ref: 'Category' },
  year: Number,
  duration: Number,
  director: String,
});
const Movie = mongoose.model('Movie', MovieSchema);

const CommentSchema = new mongoose.Schema({
  movie: { type: 'ObjectId', ref: 'Movie' },
  author: String,
  text: String,
  timestamp: Number,
});
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = { Category, Movie, Comment };
