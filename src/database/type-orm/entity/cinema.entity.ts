import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'cinema' })
export class CinemaEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'string', length: 30, unique: true })
    name: string;

    @Column({ type: 'string', length: 30, unique: true })
    slug: string;

    @Column({ type: 'string', length: 100 })
    address: string;

    @Column({ type: 'int' })
    open_at: number;

    @Column({ type: 'int' })
    close_at: number;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
