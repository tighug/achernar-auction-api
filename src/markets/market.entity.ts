import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Feeder } from "../feeders/feeder.entity";

@Entity()
export class Market {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Feeder)
  feeder: Feeder;

  @Column("text")
  name: string;

  @Column("int")
  baseAgreedPrice: number;
}
