// import { Scenario } from "./Scenario";
import { Node } from "../nodes/node.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

export enum BidderRole {
  SELLER = "seller",
  BUYER = "buyer"
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Node)
  node: Node;

  @Column("text", { nullable: true })
  address: string | null = null;
}
