const express = require('express');
const routes = express.Router();

const controllerApi = require('../controllers/controllersApi');
const user = require("../controllers/user");
const offer = require('../controllers/offer');
const favorite = require("../controllers/favorite");

//******************** RUTAS USER *****************//
routes.post("/user", user.createUser); //Crear Usuario
routes.delete("/user", user.deleteUser); //Borrar Usuario
routes.put("/user", user.updateUser); //Actualizaqr Usuario

//******************** RUTAS SESION *****************//
//Iniciar Sesión
routes.post('/login', (req, res, next) => {
    controllerApi.login(req, res, next);
})     

routes.post('/logout', controllerApi.logout) //Finalizar Sesión

/* **************** RUTAS BUSCADORE  *******************/
routes.get('/search', controllerApi.listSearch) //Ruta para Listado de resultados de busqueda

//******************** RUTAS OFERTAS *****************//
routes.post('/ads', offer.createOffer) //Crear Oferta
routes.put('/ads', offer.updateOffert) //Actualizar Oferta
routes.delete('/ads', offer.deleteOffert) //BorrarOfert

//******************** RUTAS FAVORITOS *****************//
routes.post("/favorite", favorite.createFavorite);
routes.delete("/favorite", favorite.deleteFavorite);

module.exports = routes;