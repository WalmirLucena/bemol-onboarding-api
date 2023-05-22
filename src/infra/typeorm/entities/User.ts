import { UserModel } from '@domain/models';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User implements UserModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column({ type: 'timestamp' })
  birthdate: Date;

  @Column()
  password: string;

  @Column()
  phone_number: string;

  @Column()
  city: string;

  @Column()
  cpf: string;

  @Column()
  state: string;

  @Column()
  cep: string;

  @Column()
  address: string;

  @Column()
  address_number: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { User };
