import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
	getHome(): string {
		return "Property Manager Service";
	}
}
