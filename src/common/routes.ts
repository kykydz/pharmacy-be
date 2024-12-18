import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { StockController } from 'src/domain/stock/stock.controller';

const router = Router();

const userController = new StockController();

router.get('/', userController.findAll);

export default router;
