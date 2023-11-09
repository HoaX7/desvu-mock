import { Module } from "@nestjs/common";
import { ARIUpdateController } from "./ariUpdate.controller";
import { PropertyService } from "../property/property.service";
import { UnitGroupService } from "../unitGroup/unitGroup.service";
import { UnitService } from "../unit/unit.service";

@Module({
	imports: [ PropertyService, UnitGroupService, UnitService ],
	providers: [],
	controllers: [ ARIUpdateController ]
})
export class ARIUpdateModule {}
