import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UnitGroup } from "./unitGroup.entity";

@Injectable()
export class UnitGroupService {
	constructor(@InjectRepository(UnitGroup) private readonly repo: Repository<UnitGroup>) { }

	public async getAll() {
		return this.repo.find();
	}
}