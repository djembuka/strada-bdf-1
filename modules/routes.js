const { movies, categories } = require('./docsToCreate.js');

function createRoutes(app, Category, Movie) {
  app.post('/movies', async (req, res) => {
    movies.forEach(async (doc) => {
      let movie = await Movie.create(doc);
      movie.save();
    });
    return res.status(201).send('movie created');
  });

  app.post('/categories', async (req, res) => {
    categories.forEach(async (doc) => {
      let category = await Category.create(doc);
      category.save();
    });
    return res.status(201).send('category created');
  });

  app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  app.get('/user', (req, res) => {
    res.send('This is a user page. Just any user');
  });

  app.post('/', (req, res) => {
    res.send('Got a POST request');
  });

  app.put('/user', (req, res) => {
    res.send('Get a PUT request at /user');
  });

  app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
  });
}

module.exports = {
  createRoutes,
};
