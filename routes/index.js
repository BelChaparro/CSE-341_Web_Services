const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");

routes.get("/", lesson1Controller.antuanRoute);
routes.get("/bel", lesson1Controller.belRoute);
routes.get("/fer", lesson1Controller.ferRoute);

module.exports = routes;