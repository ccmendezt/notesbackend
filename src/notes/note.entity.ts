import { Entity, PrimaryGeneratedColumn, Column, Check } from 'typeorm';

@Entity({name: 'notes'})
export class Note {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: 'varchar', length: 100})
  title: string

  @Column({type: 'varchar', length: 1000})
  content: string

  @Column({type: 'date', default: () => 'CURRENT_DATE'})
  lastUpdated: Date

  @Column({ default: true })
  isActive: boolean;

}