const { movies, categories } = require('./docsToCreate.js');

function createRoutes(app, Category, Movie) {
  app
    .route('/movies')
    .post(async (req, res) => {
      movies.forEach(async (doc) => {
        let movie = await Movie.create(doc);
        movie.save();
      });
      return res.status(201).send('movie created');
    })
    .get((req, res) => {
      Movie.findOne(
        { title: 'Titanic' },
        'year duration',
        function (err, movie) {
          if (err) return handleError(err);
          console.log(
            'The movie %s lasts %s minutes.',
            movie.year,
            movie.duration
          );
        }
      );
      return res.status(201).send('movie found');
    })
    .put((req, res) => {
      return res.status(201).send('movie upadated');
    });

  app.route('/categories').post(async (req, res) => {
    categories.forEach(async (doc) => {
      let category = await Category.create(doc);
      category.save();
    });
    return res.status(201).send('category created');
  });

  app.get('/', (req, res) => {
    res.send('The application has started.');
  });
}

module.exports = {
  createRoutes,
};
