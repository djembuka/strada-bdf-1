const { createCategoryRoutes } = require('./category.js');
const { createMovieRoutes } = require('./movie.js');
const { createCommentRoutes } = require('./comment.js');

const createRoutes = (app) => {
  createCategoryRoutes(app);
  createMovieRoutes(app);
  createCommentRoutes(app);
};

module.exports = { createRoutes };
