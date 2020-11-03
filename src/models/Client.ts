import { Entity, PrimaryGeneratedColumn, Column, Generated, CreateDateColumn } from 'typeorm'

@Entity('clients')
class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    telephone: string

    @Column()
    @Generated('uuid')
    code: string

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date
}

export default Client
