'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _productModel = require('../Models/productModel');

var _productModel2 = _interopRequireDefault(_productModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getAll(req, res) {
  try {
    const data = await _productModel2.default.find();

    return res.status(200).send(data);
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Merda!!' });
  }
}

async function update(req, res) {
  try {
    await _productModel2.default.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
      }
    });

    res.status(200).send({ Menssagem: 'Produto atualizado com sucesso!' });
  } catch (error) {
    res.status(200).send({ Menssagem: ' erro Produto não atualizado!' });
  }
}

async function getById(req, res) {
  try {
    const data = await _productModel2.default.findById(req.params.id);

    return res.status(200).send(data);
  } catch (error) {
    return res.stuatus(400).send({ error });
  }
}

async function removerProduto(req, res) {
  try {
    await _productModel2.default.findByIdAndRemove(req.params.id);
    return res.send('Produto deletado com sucesso!');
  } catch (error) {
    return error;
  }
}

async function create(req, res) {
  try {
    await _productModel2.default.create({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description
    });

    return res.status(201).send({ msg: 'Product created successfully' });
  } catch (error) {
    return res.status(400).send({ error });
  }
}

exports.default = { getAll, create, update, getById, removerProduto };