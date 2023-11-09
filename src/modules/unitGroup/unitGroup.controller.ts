import { Controller, Logger } from "@nestjs/common";

@Controller("unitGroup")
export class UnitGroupController {
	logger = new Logger(UnitGroupController.name);
}