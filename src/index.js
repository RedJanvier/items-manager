const { config } = require('dotenv');
const express = require('express');
const routes = require('./routes');
const bodyParser = require("body-parser")


config();
const { PORT } = process.env;
const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(
    PORT,
    console.log(`Server started at: http://localhost:${PORT}/api`)
);