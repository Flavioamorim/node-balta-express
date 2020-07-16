const Customer = require('../models/customer')
const customerRepository = require('../repositories/customer-repository')
const md5 = require('md5')
const emailService = require('../services/email-service')
const authService = require('../services/auth-services')

exports.get = async (req, res, next) => {
  try {
    var data = await customerRepository.get()
    res.status(200).send({
      message: 'lista getall',
      data: data
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
};

exports.getById = async (req, res, next) => {

  try {
    const customer = await customerRepository.getById(req.params.id)
    res.status(200).send({
      message: 'ByID',
      data: customer
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: e.toString()})
  }
};

exports.post = async (req, res, next) => {
  try {
    const customer = await customerRepository.create({
      'password': md5(req.body + global.SALTKEY),
      'email': req.body.email,
      'name': req.body.name,
      'roles': ['user']
    })

    // send email
    //emailService.send(req.body.email, 'Bem vindo', global.EMAILTEMP.replace('{0}', req.body.name))

    res.status(201).send({
      message: 'success'
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
};

exports.refreshToken = async (req, res, next) => {
  try {

    var token = req.body.token || req.query.token || req.headers['x-access-token']
    const data = await authService.decodeToken(token)

    const customer = await customerRepository.getById(data.id)

    if (!customer) {
      res.status(401).send({
        message: 'token invalido'
      })
    }

    var tokenData = await authService.generateToken({
      id: customer._id,
      email: customer.email,
      name: customer.name,
      roles: customer.roles
    })

    res.status(201).send({
      message: 'success',
      data: {
        email: customer.email,
        name: customer.name,
        token: token,
      }
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
}

exports.authenticate = async (req, res, next) => {
  try {
    const customer = await customerRepository.authenticate({
      'password': md5(req.body + global.SALTKEY),
      'email': req.body.email,
    })

    if (!customer) {
      res.status(404).send({
        message: 'user não encontrado'
      })
    }

    var token = await authService.generateToken({
      id: customer._id,
      email: customer.email,
      name: customer.name,
      roles: customer.roles
    })

    res.status(201).send({
      message: 'success',
      data: {
        email: customer.email,
        name: customer.name,
        token: token,
      }
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
};

exports.put = async (req, res, next) => {
  try {
    const customer = await customerRepository.update(req.params.test, req.body)
    res.status(201).send({
      message: 'success'
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
};

exports.delete = async (req, res, next) => {
  try {
    const customer = await customerRepository.destroy(req.params.deleteId)
    res.status(201).send({
      message: 'success'
    })
  } catch (error) {
    res.status(400).send({message: 'Error', data: error.toString()})
  }
};
