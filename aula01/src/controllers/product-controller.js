const { Mongoose } = require("mongoose");

const mongoose = require('mongoose')
const Product = require('..//models/product')

exports.get = (req, res, next) => {
    Product
        .find({
            active:true
        }, 'title price slug')
        .then(response => {
            res.status(200).send({
                message: 'lista',
                data: response
            })
        }).catch(e => {
            res.status(400).send({ message: 'Error', data: e.toString() })
        })
};
exports.getById = (req, res, next) => {
    Product
        .findById(req.params.id)
        .then(response => {
            res.status(200).send({
                message: 'lista',
                data: response
            })
        }).catch(e => {
            res.status(400).send({ message: 'Error', data: e.toString() })
        })
};

exports.getBySlug = (req, res, next) => {
    Product
        .findOne({ //first
            slug: req.params.slug,
            active: true
        }, 'title description price slug tags')
        .then(response => {
            res.status(200).send({
                message: 'lista',
                data: response
            })
        }).catch(e => {
            res.status(400).send({ message: 'Error', data: e.toString() })
        })
};

exports.post = (req, res, next) => {
    var product = new Product(req.body)
    product.save().then(response => {
        res.status(201).send({
            message: 'success'
        })
    }).catch(e => {
        res.status(400).send({ message: 'Error', data: e.toString() })
    })
};

exports.put = (req, res, next) => {
    const id = req.params.id
    res.status(200).send(req.body);
};

exports.delete = (req, res, next) => {
    const id = req.params.id
    res.status(200).send(req.body);
};