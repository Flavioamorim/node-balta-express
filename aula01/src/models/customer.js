const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true // remove espaços antes e depois
  },
  email: {
    type: String,
    required: [true, 'Email required'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Email required'],
    trim: true,
  },
  roles: [
    {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    }
  ]
})

module.exports = mongoose.model('Customer', schema);
