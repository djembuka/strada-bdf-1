const { movies, categories } = require('./docsToCreate.js');

function createRoutes(app, Category, Movie, Comment) {
  app
    .route('/movies')
    .post(async (req, res) => {
      movies.forEach(async (doc) => {
        let movie = await Movie.create(doc);
        movie.save();
      });
      return res.status(201).send('movie created');
    })
    .get(async (req, res) => {
      Movie.findOne(
        { title: 'Titanic' },
        'title year duration',
        function (err, movie) {
          if (err) return handleError(err);
          console.log(
            'The movie %s of %s lasts %s minutes.',
            movie.title,
            movie.year,
            movie.duration
          );
        }
      );
      let list = await Movie.find({ title: 'Titanic' }, 'year');
      return res.status(201).send(list);
    })
    .put(async (req, res) => {
      Movie.findByIdAndUpdate(
        req.query.id,
        {
          year: 2008,
        },
        {},
        () => {}
      );
      let movie = await Movie.findOne({ id: req.query.id });
      return res.status(201).send(`The movie "${movie.title}" updated`);
    })
    .delete((req, res) => {
      Movie.findByIdAndDelete(req.query.id, {}, () => {});
      return res.status(201).send('movie deleted');
    });

  app
    .route('/movies/:movieId')
    .get((req, res) => {
      Movie.findById(req.params.movieId, {}, {}, (err, movie) => {
        if (err) {
          return res.status(404).send(err);
        } else {
          console.log(
            'The movie %s of %s lasts %s minutes.',
            movie.title,
            movie.year,
            movie.duration
          );
          return res.status(201).send(`Movie ${movie.title} found.`);
        }
      });
      //return res.status(201).send(`Movie found.`);
    })
    .put(async (req, res) => {
      Movie.findByIdAndUpdate(
        req.query.id,
        {
          year: 2008,
        },
        {},
        () => {}
      );
      let movie = await Movie.findOne({ id: req.params.movieId });
      return res.status(201).send(`The movie "${movie.title}" updated`);
    })
    .delete((req, res) => {
      Movie.findByIdAndDelete(req.params.movieId, {}, () => {});
      return res.status(201).send('movie deleted');
    });

  app.route('/movies/:movieId/comments').post(async (req, res) => {
    let comment = await Comment.create({
      movie: req.params.movieId,
      author: 'Tatiana',
      text: 'Some comment',
      timestamp: Date.now(),
    });
    comment.save();
    return res.status(201).send('comment added');
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
