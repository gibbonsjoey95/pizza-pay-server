const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getSingleSauce,
  updateProductSauce,
  getSingleCheese,
  updateProductCheese,
  getAllOrderItems,
  createOrderItem,
  getOrderItem,
  deleteOrderItem,
  updateItem,
} = require('../controllers/products');

router.route('/api/products').get(getAllProducts);
router
  .route('/api/products/sauce/:id')
  .get(getSingleSauce)
  .patch(updateProductSauce);
router
  .route('/api/products/cheese/:id')
  .get(getSingleCheese)
  .patch(updateProductCheese);
router.route('/api/items').get(getAllOrderItems).post(createOrderItem);
router
  .route('/api/items/:id')
  .get(getOrderItem)
  .patch(updateItem)
  .delete(deleteOrderItem);

module.exports = router;
