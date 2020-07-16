const express = require('express')
const router = express.Router()
const controller = require('../controllers/order-controller')
const authService = require('../services/auth-services')

router.get('/id/:id', controller.getById);
router.get('/', authService.authorize, controller.get);
router.post('/', authService.authorize, controller.post);

module.exports = router
