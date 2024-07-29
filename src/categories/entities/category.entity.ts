import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'category' })
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 50, unique: true, nullable: false })
    name: string;

    @Column({ type: 'date', nullable: true })
    registrionDate?: Date;

    @Column({ type: 'date', nullable: true })
    inactivationDate?: Date;
}
