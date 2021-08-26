const routes = require("express").Router();

const controllers = require("../Controllers/controllers.js");

routes.post("/signup", controllers.registerUser);

routes.post("/signin", controllers.authenticateUser);

module.exports = routes;
