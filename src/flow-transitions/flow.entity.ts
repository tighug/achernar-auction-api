import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Wire } from "../wires/wire.entity";

@Entity()
export class Flow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Wire)
  wire: Wire;

  @Column("float")
  nodeP: number;

  @Column("float")
  nodeV: number;

  @Column("float")
  lineI: number;

  @Column("boolean")
  isFault: boolean;

  get nodeI() {
    return this.nodeP / this.nodeV;
  }
}
