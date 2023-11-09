import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../model/base.entity";
import { UnitGroup } from "../unitGroup/unitGroup.entity";
import { Property } from "../property/property.entity";

@Entity({ name: "units" })
export class Unit extends BaseEntity {
  @Column({
  	type: "int",
  	name: "room_number",
  	nullable: false,
  })
  	roomNumber: number;

  @Column({
  	type: "boolean",
  	name: "is_dirty",
  	default: false,
  })
  	isDirty: boolean;

  @Column({
  	type: "boolean",
  	name: "is_occupied",
  	default: false,
  })
  	isOccupied: boolean;

  @ManyToOne(() => UnitGroup, (unitGroup) => unitGroup.units)
  	unitGroup?: UnitGroup;

  @ManyToOne(() => Property, (property) => property.units)
  	property?: Property;
}
