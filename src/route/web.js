import express from 'express';
import homeController from "../controller/homecontroller";
let route = express.Router();
let initWebRoute = (app) => {
    route.get('/', homeController.getHomePage);
    route.get('/about', homeController.getAboutPage);
    route.get('/CRUD', homeController.getCRUD);
    //rest api

    return app.use('/', route);
}
module.exports = initWebRoute;  