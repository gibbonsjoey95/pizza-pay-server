const express = require('express');
const router = express.Router();

const { getAllProducts } = require('../controllers/products');

router.route('/api/products').get(getAllProducts);

module.exports = router;
