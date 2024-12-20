import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'users'})

export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ name: 'first_name' })
    firstName: string;
  
    @Column({name: 'last_name'})
    lastName: string;

    @Column({name: 'email'})
    email: string;
  
    @Column({ name: 'is_active',default: true })
    isActive: boolean;
}
