import { Request, Response } from 'express';
import { StockService } from './stock.service';

export class StockController {
	private readonly stockService: StockService;
	constructor(stockService: StockService) {
		this.stockService = stockService;

		this.findAll = this.findAll.bind(this);
		this.deleteStock = this.deleteStock.bind(this);
		this.createStock = this.createStock.bind(this);
		this.editStock = this.editStock.bind(this);
		this.getStock = this.getStock.bind(this);
	}

	async findAll(req: Request, res: Response) {
		return await this.stockService.getStocks();
	}

	async deleteStock(req: Request, res: Response) {
		const { id } = req.params;
		return await this.stockService.deleteStock(id);
	}

	async createStock(req: Request, res: Response) {
		return await this.stockService.createStock(req.body);
	}

	async editStock(req: Request, res: Response) {
		const { id } = req.params;
		return await this.stockService.editStock(id, req.body);
	}

	async getStock(req: Request, res: Response) {
		const { id } = req.params;
		return await this.stockService.getStock(id);
	}
}
