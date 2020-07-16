const Customer = require('../models/customer')

exports.create = async (data) => {
    var customer = new Customer(data)
    return await customer.save()
}

exports.authenticate = async (data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    })

    return res
}

exports.getById = async (id) => {
    return await Customer.findById(id)
}
