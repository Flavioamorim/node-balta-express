const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true // remove espaços antes e depois 
    },
    slug: {
        type: String,
        required: [true, 'Slug obrigatoria'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Descrição obrigatoria'],
    },
    price: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }]
})

module.exports = mongoose.model('Product', schema);
