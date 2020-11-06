'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

const schema = new _mongoose.Schema({
  title: {
    type: String
  },
  price: Number,
  description: String
});

exports.default = (0, _mongoose.model)('productModel', schema);