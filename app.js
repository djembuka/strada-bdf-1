const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

require('./modules/dbConnect.js');

const { Category, Movie } = require('./modules/models.js');
const { createRoutes } = require('./modules/routes.js');

createRoutes(app, Category, Movie);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
