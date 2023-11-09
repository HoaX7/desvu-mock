import { Module } from "@nestjs/common";
import { UnitGroupController } from "./unitGroup.controller";
import { UnitGroupService } from "./unitGroup.service";

@Module({
	imports: [],
	controllers: [ UnitGroupController ],
	providers: [ UnitGroupService ],
})
export class UnitGroupModule {}
