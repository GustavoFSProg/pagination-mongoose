'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _productRouteList = require('./routes/productRouteList');

var _productRouteList2 = _interopRequireDefault(_productRouteList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

_mongoose2.default.connect(process.env.DATABASE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const app = (0, _express2.default)();

app.use(_express2.default.json());
app.use((0, _cors2.default)());
app.use('/', _productRouteList2.default);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`App Server Running at Port ${PORT}`);
});

exports.default = app;