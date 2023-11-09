import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../model/base.entity";
import { Unit } from "../unit/unit.entity";

@Entity({ name: "properties" })
export class Property extends BaseEntity {
  @Column({
  	type: "varchar",
  	length: 300,
  })
  	name: string;

  @Column({ type: "text" })
  	address: string;

  @Column({ type: "string" })
  	description: string;

  @OneToMany(() => Unit, (unit) => unit.unitGroup)
  	units?: Unit[];
}
