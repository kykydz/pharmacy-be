import { StockEntity } from 'src/enntities/stock.entity';
import { StockRepository } from './stock.repository';

export class StockService {
	constructor(private readonly stockRepository: StockRepository) {
		this.stockRepository = stockRepository;
	}

	async createStock(data: Partial<StockEntity>): Promise<StockEntity> {
		const result = await this.stockRepository.create({
			name: data.name,
			unit: data.unit,
			stock: data.stock,
			price: data.price,
		} as StockEntity);
		return result;
	}

	async editStock(id: string, data: Partial<StockEntity>): Promise<StockEntity> {
		await this.stockRepository.update(
			{
				id,
			},
			data
		);
		const stockData = await this.stockRepository.getOne({ id });
		return stockData;
	}

	async deleteStock(id: string): Promise<{ id: string }> {
		await this.stockRepository.delete(id);
		return {
			id,
		};
	}

	async getStocks(): Promise<StockEntity[]> {
		const result = await this.stockRepository.getMany();
		return result;
	}

	async getStock(id: string): Promise<StockEntity> {
		const result = await this.stockRepository.getOne({ id });
		return result;
	}
}
