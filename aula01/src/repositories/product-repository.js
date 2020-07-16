const mongoose = require('mongoose')
const Product = require('../models/product')

exports.create = async (data) => {
  var product = new Product(data)
  return await product.save()
}

exports.update = async (updateId, data) => {
  return await Product
      .findOneAndUpdate(updateId, {
        $set: {
          title: data.title,
          description: data.description,
          price: data.price,
        }
      })
}

exports.destroy = async (id) => {
  return await Product
      .findOneAndRemove(id)
}

exports.get = async () => {
  const rest = await Product
      .find({
        active: true
      }, 'title price slug')

  return rest
}

exports.getById = async (id) => {
  return await Product.findById(id)
}

exports.getBySlug = async (slug) => {
  return await Product
      .findOne({
        slug: slug,
        active: true
      }, 'title description price slug tags')
}

exports.getByTag = (tag) => {
  return Product
      .findOne({ //first
        tags: tag,
        active: true
      }, 'title description price slug tags')
}
