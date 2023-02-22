const { Movie } = require('../modules/models.js');

const createMovie = (movieObject) => {
  return Movie.create(movieObject);
};

const getAllMovies = () => {
  return Movie.find({});
};

const getMovie = (movieId) => {
  return Movie.findById(movieId).populate('directorId');
};

const updateMovie = async (movieId, dataToUpdate) => {
  return await Movie.findByIdAndUpdate(movieId, dataToUpdate);
};

const deleteMovie = async (movieId) => {
  await Movie.findByIdAndDelete(movieId);
  return;
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
};
