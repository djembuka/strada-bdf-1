const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

//app.use(express.json());
const allowedOrigins = [''];
app.use(
  cors({
    origin: allowedOrigins,
  })
);

require('./modules/dbConnect.js');
const { createRoutes } = require('./routes/routes.js');

createRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
