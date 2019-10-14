const express = require('express');
const routes = express.Router();

const ProductController = require ('./controllers/ProductController');

//Listagem de todos produtos
routes.get('/products', ProductController.index);

//Listagem de um produto
routes.get('/products/:id', ProductController.show);

//Incremento de um produco
routes.post('/products', ProductController.store);

//Atualização do produto
routes.put('/products/:id', ProductController.update);

//Exclusão do produto
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;