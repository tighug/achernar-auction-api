import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Feeder } from "../feeders/feeder.entity";

@Entity()
export class Node {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Feeder)
  feeder: Feeder;

  @Column("int")
  num: number;

  @Column("float")
  posX: number;

  @Column("float")
  posY: number;
}
