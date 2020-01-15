import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feeder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  networkNum: number;

  @Column("int")
  feederNum: number;

  @Column("int")
  nodeCount: number;

  @Column("int")
  houseCount: number;
}
