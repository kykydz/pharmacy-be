import {
	Entity,
	Column,
	BaseEntity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('stock')
export class StockEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid', { name: 'id' })
	id: string;

	@Column({ name: 'name' })
	name: string;

	@Column({ name: 'unit' })
	unit: string;

	@Column({ name: 'stock' })
	stock: number;

	@Column({ name: 'price' })
	price: number;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'modified_at' })
	modifiedAt: Date;
}
