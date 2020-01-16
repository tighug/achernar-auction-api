import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Market } from "../markets/market.entity";
import { Wire } from "../wires/wire.entity";
import { Flow } from "./flow.entity";

@Entity()
export class FlowTransition {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Market)
  market: Market;

  @ManyToOne(() => Flow)
  initFlow: Flow;

  @ManyToOne(() => Flow)
  befFlow: Flow;

  @ManyToOne(() => Flow)
  aftFlow: Flow;
}
