import { Market } from "../markets/market.entity";
import { Wire } from "../wires/wire.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from "typeorm";

@Entity()
export class Flow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Market)
  market: Market;

  @ManyToOne(() => Wire)
  @JoinColumn()
  wire: Wire;

  @Column("float")
  initNodeP: number;

  @Column("float")
  initNodeV: number;

  @Column("float")
  initLineI: number;

  @Column("float")
  befNodeP: number;

  @Column("float")
  befNodeV: number;

  @Column("float")
  befLineI: number;

  @Column("boolean")
  befIsFault!: boolean;

  @Column("float")
  aftNodeP: number;

  @Column("float")
  aftNodeV: number;

  @Column("float")
  aftLineI: number;

  aftIsFault!: boolean;
}
