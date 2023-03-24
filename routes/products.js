const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  // getSizes,
  getAllOrderItems,
  createOrderItem,
  getOrderItem,
  deleteItem,
  updateItem,
} = require('../controllers/products');

router.route('/api/products').get(getAllProducts);
// router.route('/api/products/sizes/:id').get(getSizes);
router.route('/api/items').get(getAllOrderItems).post(createOrderItem);
router
  .route('/api/items/:id')
  .get(getOrderItem)
  .patch(updateItem)
  .delete(deleteItem);

module.exports = router;
