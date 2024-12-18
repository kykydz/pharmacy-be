import {
	Entity,
	Column,
	BaseEntity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('transaction_detail')
export class TransactionDetailEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid', { name: 'id' })
	id: string;

	@Column('transaction_id')
	transactionId: string;

	@Column('product_id')
	productId: string;

	@Column('unit')
	unit: string;

	@Column('quantity')
	quantity: number;

	@Column('price')
	price: number;

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'modified_at' })
	modifiedAt: Date;
}
