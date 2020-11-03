const express = require('express')
const router = express.Router();
const productsService = require('../services/Service');

router.get('/', async (request, response) => {
  const products = await productsService.findAll();
  response.status(200).send(products);
});

router.get('/:id', async (request, response) => {
  const id = request.params.id;
  const product = await productsService.findById(id);
  try {
    response.status(product ? 200 : 404).send(product);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.post('/', async (request, response) => {
  const body = request.body;
  try {
    const result = await productsService.create(body);
    response.status(result._id ? 200 : 400).send(result);
  } catch(e) {
    response.status(500).send(e);
  }
});

router.put('/:id', async (request, response) => {
  const id = request.params.id;
  const body = request.body;
  try {
    const result = await productsService.update(id, body);
    console.log(result);
    response.status(result._id ? 200 : 400).send(result);
  } catch(e) {
    response.status(500).send(e);
  }
});

router.delete('/:id', async (request, response) => {
  const id = request.params.id;
  try {
    const result = await productsService.deleteById(id);
    response.status(result.deletedCount > 0 ? 200 : 400).send(result);
  } catch(e) {
    response.status(500).send(e);
  }
});

module.exports = router;