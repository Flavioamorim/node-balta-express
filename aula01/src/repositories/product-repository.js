const mongoose = require('mongoose')
const Product = require('../models/product')

exports.create = (data) => {
    var product = new Product(data)
    return product.save()
}

exports.update = (updateId, data) => {
    return Product
        .findByIdAndUpdate(updateId, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
            }
        })
}

exports.destroy = (id) => {
    return Product
        .findOneAndRemove(id)
}

exports.get = () => {
    return Product
        .find({
            active: true
        }, 'title price slug')
}

exports.getBySlug = (slug) => {
    return Product
        .findOne({ //first
            slug: slug,
            active: true
        }, 'title description price slug tags')
}

exports.getById = (id) => {
    return Product
        .findById(id)
}

exports.getByTag = (tag) => {
    return Product
        .findOne({ //first
            tags: tag,
            active: true
        }, 'title description price slug tags')
}