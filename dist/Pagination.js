'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _productModel = require('./Models/productModel');

var _productModel2 = _interopRequireDefault(_productModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const { argv } = process

async function Pagination(req, res) {
  const { page } = req.params;

  const limit = 3;
  // const page = 2

  const data = await _productModel2.default.find().select().limit(limit).skip(limit * page).sort({
    name: 'asc'
  });

  return res.status(200).send(data);
}

exports.default = Pagination;