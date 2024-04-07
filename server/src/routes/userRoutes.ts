import express, { Express, Request, Response, Router } from 'express';
import controllers from '../controllers/user/userController';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('welcome user');
});

router.post('/login', controllers.login);
router.post('/register', controllers.register);

export default router;
