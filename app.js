require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

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

app.listen(process.env.DB_CONNECT_PORT, () => {
  console.log(`Example app listening on port ${process.env.DB_CONNECT_PORT}`);
});
