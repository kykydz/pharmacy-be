import { FindOptions, FindOptionsWhere, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseRepository<T> {
	protected readonly repository: Repository<T>;

	constructor(repository: Repository<T>) {
		this.repository = repository;
	}

	public async getOne(queryWhere: FindOptionsWhere<T>): Promise<T | null> {
		return this.repository.findOne({
			where: queryWhere,
		});
	}

	public async getMany(): Promise<T[]> {
		return await this.repository.find();
	}

	public async create(data: T): Promise<T> {
		return this.repository.save(data);
	}

	public async update(
		queryWhere: FindOptionsWhere<T>,
		data: QueryDeepPartialEntity<T>
	): Promise<void> {
		await this.repository.update(queryWhere, data);
	}

	public async delete(id: string): Promise<void> {
		await this.repository.delete(id);
	}
}
