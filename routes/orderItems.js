const express = require('express');
const router = express.Router();

const { getAllOrderItems } = require('../controllers/orderItems');

router.route('/api/items').get(getAllOrderItems);

module.exports = router;
