import 'reflect-metadata';
import { StockEntity } from 'src/enntities/stock.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'kyky',
	password: '',
	database: 'postgres',
	entities: [StockEntity],
	synchronize: true,
	logging: true,
});
