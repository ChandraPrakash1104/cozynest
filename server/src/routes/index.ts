import express, { Express, Request, Response, Router } from 'express';

import userRoutes from './userRoutes';
import productRoutes from './productRoutes';
import cartRoutes from './cartRoutes';
import wishlistRoutes from './wishlistRoutes';
import authenticateUser from '../middleware/auth';

const router: Router = express.Router();

router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/cart', authenticateUser, cartRoutes);
router.use('/wishlist', authenticateUser, wishlistRoutes);

export default router;
