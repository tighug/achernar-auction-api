import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Feeder } from "../feeders/feeder.entity";

@Entity()
export class Market {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Feeder)
  feeder: Feeder;

  @Column("text")
  name: string;

  @Column("int")
  baseAgreedPrice: number;
}
