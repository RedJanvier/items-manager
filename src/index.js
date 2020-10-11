import { config } from 'dotenv';
import express from 'express';
import { json, urlencoded } from "body-parser";
import cors from "cors";
import routes from './routes';


config();
const { PORT } = process.env;
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));
app.use('/api', routes);
app.listen(
    PORT,
    console.log(`Server started at: http://localhost:${PORT}/api`)
);