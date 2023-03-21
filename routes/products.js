const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getAllOrderItems,
  createOrderItem,
} = require('../controllers/products');

router.route('/api/products').get(getAllProducts);
router.route('/api/items').get(getAllOrderItems).post(createOrderItem);

module.exports = router;
