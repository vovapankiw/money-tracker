import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'int' })
  accountId: number;

  @Column({ type: 'varchar', length: 256 })
  refreshToken: string;

  @Column({ type: 'int' })
  expireAt: number;
}
