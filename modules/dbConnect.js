const url = process.env.DB_CONNECT_ADDRESS;
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { mongoose };
