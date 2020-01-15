import { Entity, PrimaryColumn, ManyToOne, Column } from "typeorm";
import { Market } from "src/markets/market.entity";

@Entity()
export class MarketResult {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Market)
  market: Market;

  @Column("int")
  price: number;

  @Column("int")
  sellBidSum: number;

  @Column("int")
  sellContractSum: number;

  @Column("int")
  buyBidSum: number;

  @Column("int")
  buyContractSum: number;
}
