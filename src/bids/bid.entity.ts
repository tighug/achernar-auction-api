import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Market } from "../markets/market.entity";
import { User } from "src/users/user.entity";

export enum BidType {
  SELLER = "seller",
  BUYER = "buyer"
}

@Entity()
export class Bid {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Market)
  market: Market;

  @ManyToOne(() => User)
  user: User;

  @Column("int")
  price: number;

  @Column("int")
  amount: number;

  @Column("int")
  contractAmount: number;

  @Column({
    type: "enum",
    enum: BidType
  })
  bidType: BidType;
}
