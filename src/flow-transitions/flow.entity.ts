import { Market } from "../markets/market.entity";
import { Wire } from "../wires/wire.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Flow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("float")
  nodeP: number;

  @Column("float")
  nodeV: number;

  @Column("float")
  lineI: number;

  @Column("boolean")
  isFault: boolean;
}
