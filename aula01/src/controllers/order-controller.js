const orderRepository = require('../repositories/order-repository')
const guid = require('guid')
const authService = require('../services/auth-services')

exports.get = async (req, res, next) => {
    try {
        var data = await orderRepository.get()
        res.status(200).send({
            message: 'content',
            data: data
        })
    } catch (error) {
        res.status(400).send({ message: 'Error', data: error.toString() })
    }
};

exports.getById = async (req, res, next) => {

    try {
        const customer = await orderRepository.getById(req.params.id)
        res.status(200).send({
            message: 'ByID',
            data: customer
        })
    } catch (error) {
        res.status(400).send({ message: 'Error', data: e.toString() })
    }
};

exports.post = async (req, res, next) => {

    // get token from request
    var token = req.body.token || req.query.token || req.headers['x-access-token']

    //decode token
    var data = await authService.decodeToken(token)

    try {
        const customer = await orderRepository.create({
            customer: data.id,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        })
        res.status(201).send({
            message: 'success'
        })
    } catch (error) {
        res.status(400).send({ message: 'Error', data: error.toString() })
    }
};
