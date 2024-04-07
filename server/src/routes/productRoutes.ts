import express, { Request, Response, Router } from 'express';

import controllers from '../controllers/product/productController';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });
const router: Router = express.Router();

router.get('/bulk', controllers.productFilter.bulkFilter);
router.get('/:id', controllers.productFilter.idFilter);
router.get('/category/:category', controllers.productFilter.categoryFilter);

router.post('/', upload.single('image'), controllers.productPost);

export default router;
