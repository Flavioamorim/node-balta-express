const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')
const app = express()
const router = express.Router()

mongoose.connect(config.connectionString)

// carregar rotas
const indexRoutes = require('./routes/index')
const productRoutes = require('./routes/product-route')
const customerRoutes = require('./routes/customer-route')
const orderRoutes = require('./routes/order-routes')

app.use(bodyParser.json({
  limit: '5mb'
}));

app.use(bodyParser.urlencoded({extended:false}))

// Habilita o CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.use('/customer', customerRoutes);
app.use('/order', orderRoutes);

module.exports = app
