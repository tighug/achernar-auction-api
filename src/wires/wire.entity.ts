import { Feeder } from "../feeders/feeder.entity";
import { Node } from "../nodes/node.entity";
import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Wire {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Node)
  prevNode: Node;

  @ManyToOne(() => Node)
  node: Node;

  @Column("float")
  lengthM: number;

  @Column("int")
  phase: number;

  @Column("boolean")
  hasLoad: boolean;

  @Column("varchar", { length: 50 })
  cableType: string;

  @Column("float")
  rOhmPerKm: number;

  @Column("float")
  xOhmPerKm: number;

  @Column("float")
  zOhm: number;
}
