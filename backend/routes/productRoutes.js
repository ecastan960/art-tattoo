import express from 'express';
import AsyncHandler from 'express-async-handler';
// import { restart } from 'nodemon';
import Product from '../models/productModel.js';
import {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
    getTopProducts
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc  Fetch all products
// @route  GET /api/products
// @access  Public
router.get('/', AsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
}));

// @desc  Fetch sinlge products
// @route  GET /api/products/:id
// @access  Public
router.get('/:id', AsyncHandler(async (req, res) => {
  // const product = products.find(p => p._id === req.params.id);
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
}));

// router.route('/').get(getProducts).post(protect,admin, createProduct);
// router.route('/:id/reviews').post(protect, createProductReview);
// router.get('/top', getTopProducts)
// router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct);

export default router;