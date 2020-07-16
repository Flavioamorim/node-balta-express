const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
        trim: true // remove espaços antes e depois 
    },
    status: {
        type: String,
        enum: ['created', 'done']
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    items: [{
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
})

module.exports = mongoose.model('Order', schema);
