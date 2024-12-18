import { BaseRepository } from 'src/common/base.repository';
import { StockEntity } from 'src/enntities/stock.entity';
import { Repository } from 'typeorm';

export class StockRepository extends BaseRepository<StockEntity> {
	constructor(repository: Repository<StockEntity>) {
		super(repository);
	}
}
