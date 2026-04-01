import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/web';
import connectDB from './config/connectDB';
require('dotenv').config();
let dotenv = require('dotenv');
dotenv.config();
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoute(app);

connectDB();

let port = process.env.PORT || 8088;
app.listen(port, () => {
    console.log("Server is running on the port: " + port);
});