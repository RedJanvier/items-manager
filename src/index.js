const { config } = require('dotenv');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./routes');
const bodyParser = require("body-parser")


config();
const { PORT } = process.env;
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
app.listen(
    PORT,
    console.log(`Server started at: http://localhost:${PORT}/api`)
);