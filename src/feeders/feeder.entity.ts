import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Feeder {
  @PrimaryColumn()
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
