import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Market } from "../markets/market.entity";
import { Flow } from "./flow.entity";

@Entity()
export class FlowTransition {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Market)
  market: Market;

  @ManyToOne(() => Flow)
  initFlow: Flow;

  @ManyToOne(() => Flow, { nullable: true })
  befFlow: Flow;

  @ManyToOne(() => Flow, { nullable: true })
  aftFlow: Flow;
}
