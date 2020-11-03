const Product = require('../models/ProductModel')

/**
 * @returns {Promise}
 */
async function findAll() {
  return await Product.find();
}

/**
 * @param {Number} id
 * @returns {Promise}
 */
async function findById(id) {
  return await Product.find({ id: id}).exec();
}


/**
 * @param {Object} product
 * @returns {Promise}
 */
async function create(product) {
  product.url = `/products/${product.id}` 
  const newProduct = new Product(product);
  return await newProduct.save();
}

/**
 * @param {Number} id
 * @param {Object} value
 * @returns {Promise}
 */
async function update(id, value) {
  const filter = { 'id': id };
  await Product.findOneAndUpdate(filter, value)
  return await Product.find({ id: id}).exec();
}

/**
 * @param {Number} id
 * @returns {Promise}
 */
async function deleteById(id) {
  const filter = { 'id': id };
  return await Product.deleteMany(filter)
}

module.exports = {
  findAll, findById,
  create, deleteById,
  update,
}