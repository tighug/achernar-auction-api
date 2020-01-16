import { Market } from "../markets/market.entity";
import { Node } from "../nodes/node.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class NodalPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Market)
  market: Market;

  @ManyToOne(() => Node)
  node: Node;

  @Column("float")
  muIp: number;

  @Column("float")
  muIn: number;

  @Column("float")
  muVp: number;

  @Column("float")
  muVn: number;

  @Column("float")
  weightPrice: number;
}
