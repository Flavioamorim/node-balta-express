const express = require('express')
const router = express.Router()
const controller = require('../controllers/product-controller')
const authService = require('../services/auth-services')

router.get('/:slug', controller.getBySlug);
router.get('/id/:id', controller.getById);
router.get('/tag/:tag', controller.getByTag);
router.get('/', controller.get);
router.post('/', authService.isAdmin, controller.post);
router.delete('/:deleteId', authService.isAdmin, controller.delete);
router.put('/:test', authService.isAdmin, controller.put);


module.exports = router
