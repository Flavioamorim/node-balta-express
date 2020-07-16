const Product = require('..//models/product')
const productRepository = require('../repositories/product-repository')

exports.get = async (req, res, next) => {
    try {
        var data = await productRepository.get()
        res.status(200).send({
            message: 'lista getall',
            data: data
        })
    } catch (error) {
        res.status(400).send({ message: 'Error', data: error.toString() })
    }
};

exports.getById = async (req, res, next) => {

    try {
        const product = await productRepository.getById(req.params.id)
        res.status(200).send({
            message: 'ByID',
            data: product
        })
    } catch (error) {
        res.status(400).send({ message: 'Error', data: e.toString() })
    }
};

exports.getBySlug = async (req, res, next) => {
    try {
        const product = await productRepository.getBySlug(req.params.slug)
        res.status(200).send({
            message: 'ByID',
            data: product
        })
    } catch (error) {
        res.status(400).send({ message: 'Error', data: e.toString() })
    }
};

// tag with promise and rest with async await
exports.getByTag = (req, res, next) => {
    productRepository
        .getByTag(req.params.tag)
        .then(response => {
            res.status(200).send({
                message: 'lista',
                data: response
            })
        }).catch(e => {
            res.status(400).send({ message: 'Error', data: e.toString() })
        })
};

exports.post = async (req, res, next) => {
    try {
        const product = await productRepository.create(req.body)
        res.status(201).send({
            message: 'success'
        })
    } catch (error) {
        res.status(400).send({ message: 'Error', data: error.toString() })
    }
};

exports.put = async (req, res, next) => {
    try {
        const product = await productRepository.update(req.params.test, req.body)
        res.status(201).send({
            message: 'success'
        })
    } catch (error) {
        res.status(400).send({ message: 'Error', data: error.toString() })
    }
};

exports.delete = async (req, res, next) => {
    try {
        const product = await productRepository.destroy(req.params.deleteId)
        res.status(201).send({
            message: 'success'
        })
    } catch (error) {
        res.status(400).send({ message: 'Error', data: error.toString() })
    }    
};