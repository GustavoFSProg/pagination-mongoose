'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _productController = require('../Controllers/productController');

var _productController2 = _interopRequireDefault(_productController);

var _Pagination = require('../Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = new _express.Router();

const productRouteList = [routes.get('/', _productController2.default.getAll), routes.get('/products/:id', _productController2.default.getById), routes.post('/post', _productController2.default.create), routes.put('/products/update/:id', _productController2.default.update), routes.delete('/products/del/:id', _productController2.default.removerProduto), routes.post('/pagination/:page', _Pagination2.default)];

exports.default = productRouteList;