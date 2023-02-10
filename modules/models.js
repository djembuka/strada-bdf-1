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

module.exports = { Category, Movie };
