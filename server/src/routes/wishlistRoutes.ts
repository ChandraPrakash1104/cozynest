import express, { Router } from 'express';
import {
  addItemToWishlist,
  removeFromWishlist,
  getAllItem,
} from '../controllers/wishlist/wishlistController';

const router: Router = express.Router();

router.get('/', getAllItem);
router.post('/', addItemToWishlist);
router.delete('/:wishlistItemId', removeFromWishlist);

export default router;
