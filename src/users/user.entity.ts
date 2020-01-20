// import { Scenario } from "./Scenario";
import { Node } from "../nodes/node.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Node)
  node: Node;

  @Column("text")
  address: string;
}
