
const express = require('express')
const router = express.Router()
const controller = require('../controllers/customer-controller')
const authService = require('../services/auth-services')

router.get('/id/:id', controller.getById);
router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshToken);
router.delete('/:deleteId', controller.delete);
router.put('/:test', controller.put);


module.exports = router
