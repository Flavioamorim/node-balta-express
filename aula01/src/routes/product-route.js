
const express = require('express')
const router = express.Router()
const controller = require('../controllers/product-controller')

router.get('/:slug', controller.getBySlug);
router.get('/id/:id', controller.getById);
router.get('/tag/:tag', controller.getByTag);
router.get('/', controller.get);
router.post('/', controller.post);
router.delete('/:deleteId', controller.delete);
router.put('/:test', controller.put);


module.exports = router