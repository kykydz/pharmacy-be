import {
	Entity,
	Column,
	BaseEntity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('transaction')
export class TransactionEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid', { name: 'id' })
	id: string;

	@Column({ name: 'customer_name' })
	customerName: string;

	@Column({ name: 'sum_item' })
	sumItem: string;

	@Column({ name: 'total_price' })
	totalPrice: number;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'modified_at' })
	modifiedAt: Date;
}
