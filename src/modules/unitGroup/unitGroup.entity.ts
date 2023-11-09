import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../model/base.entity";
import { Property } from "../property/property.entity";
import { Unit } from "../unit/unit.entity";

@Entity({ name: "unit_groups" })
export class UnitGroup extends BaseEntity {
    @Column({
    	type: "varchar",
    	length: 300 
    })
    	name: string;

  @Column({
  	type: "int",
  	name: "number_of_units",
  	nullable: false 
  })
  	numberOfUnits: number;

  // This column contains room characteristics
  // i.e. Deluxe Room, Standard Room etc...
  @Column({
  	type: "string",
  	nullable: false,
  	enum: [ "DELUX", "STANDARD" ],
  	name: "unit_type"
  })
  	unitType: string;

@OneToMany(() => Unit, unit => unit.unitGroup)
	units: Unit[];

}