const {
  createMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
} = require('../services/movieService');

const { movies } = require('../modules/docsToCreate.js');

const createMovieRoutes = (app) => {
  app
    .route('/movies')
    .post(async (req, res) => {
      movies.forEach(async (movieObject) => {
        let movie = await createMovie(movieObject);
        movie.save();
      });
      return res.status(201).send('movies created');
    })
    .get(async (req, res) => {
      let list = await getAllMovies();
      return res.status(201).send(list);
    });

  app
    .route('/movies/:movieId')
    .get(async (req, res) => {
      const movie = await getMovie(req.params.movieId);
      return res.status(201).send(`Movie ${movie.title} found.`);
    })
    .put(async (req, res) => {
      const movie = await updateMovie(req.params.movieId, { year: 2009 });
      return res.status(201).send(`The movie "${movie.title}" updated`);
    })
    .delete(async (req, res) => {
      const movie = await getMovie(req.params.movieId);
      const title = movie.title;
      await deleteMovie(req.params.movieId);
      return res.status(201).send(`The movie "${title}" deleted`);
    });
};

module.exports = { createMovieRoutes };
