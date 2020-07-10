const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

mongoose.connect('mongodb+srv://flaviotest:galao01@flaviotest.zxrwz.mongodb.net/flaviotest?retryWrites=true&w=majority')

// carregar rotas
const indexRoutes = require('./routes/index')
const productRoutes = require('./routes/product-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', indexRoutes);
app.use('/products', productRoutes);

module.exports = app