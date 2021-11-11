const express = require('express');
const plantControllers = require('./controllers/Plant');

const routes = express.Router();

routes.get('/plants', plantControllers.index);
routes.post('/new/plant', plantControllers.store);
routes.delete('/delete/plant/:id_node', plantControllers.delete);

module.exports = routes;