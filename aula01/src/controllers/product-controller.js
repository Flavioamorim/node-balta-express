const Product = require('..//models/product')
const productRepository = require('../repositories/product-repository')

exports.get = (req, res, next) => {
    productRepository
        .get()
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
    productRepository
        .getById(req.params.id)
        .then(response => {
            res.status(200).send({
                message: 'lista by id',
                data: response
            })
        }).catch(e => {
            res.status(400).send({ message: 'Error', data: e.toString() })
        })
};

exports.getBySlug = (req, res, next) => {
    productRepository
        .getBySlug(req.params.slug)
        .then(response => {
            res.status(200).send({
                message: 'lista',
                data: response
            })
        }).catch(e => {
            res.status(400).send({ message: 'Error', data: e.toString() })
        })
};

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

exports.post = (req, res, next) => {
    productRepository.create(req.body)
        .then(response => {
            res.status(201).send({
                message: 'success'
            })
        }).catch(e => {
            res.status(400).send({ message: 'Error', data: e.toString() })
        })
};

exports.put = (req, res, next) => {
    productRepository
        .update(req.params.test, req.body)
        .then(x => {
            res.status(201).send({
                message: 'Produto atualizado com sucesso'
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Ops, deu ruim' + e.toString()
            })
        });
};

exports.delete = (req, res, next) => {
    productRepository
        .destroy(req.params.deleteId)
        .then(x => {
            res.status(200).send({
                message: 'Produto removido com sucesso',
                id: req.params.deleteId
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Ops, deu ruim' + e.toString()
            })
        });
};