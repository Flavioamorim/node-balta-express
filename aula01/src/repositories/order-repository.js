const Order = require('../models/order')

exports.create = async (data) => {
    var content = new Order(data)
    return await content.save()
}


exports.getById = async (id) => {
    return await Order.findById(id)
}

exports.get = async () => {
    const rest = await Order
        .find({
        }).populate('customer', 'name')
        .populate('items.product', 'title')

    return rest
}