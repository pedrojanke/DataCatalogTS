import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'gender' })
export class Gender {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 50, unique: true, nullable: false })
    name: string;

    @Column({ type: 'date', nullable: true })
    registrionDate?: Date;

    @Column({ type: 'date', nullable: true })
    inactivationDate?: Date;
}
