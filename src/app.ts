import { Router, Express } from 'express';
import { StockController } from 'src/domain/stock/stock.controller';
import { StockRepository } from './domain/stock/stock.repository';
import { AppDataSource } from './config/typeorm-datasource';
import { StockService } from './domain/stock/stock.service';
import { StockEntity } from './enntities/stock.entity';
import requestHandler from './common/middleware/request-handler';
import * as express from 'express';
import * as cors from 'cors';

const httpApp = async (app: Express) => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	const datasource = await AppDataSource.initialize();

	const stockRepository = new StockRepository(datasource.getRepository(StockEntity));

	const stockService = new StockService(stockRepository);

	const stockController = new StockController(stockService);

	const router = Router();
	router.use(cors());

	router.post('/stocks', requestHandler(stockController.createStock));
	router.get('/stocks', requestHandler(stockController.findAll));
	router.delete('/stocks/:id', requestHandler(stockController.deleteStock));
	router.patch('/stocks/:id', requestHandler(stockController.editStock));
	router.get('/stocks/:id', requestHandler(stockController.getStock));

	app.use(router);

	return app;
};

export default httpApp;
