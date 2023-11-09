import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Unit } from "./unit.entity";

@Injectable()
export class UnitService {
	constructor(@InjectRepository(Unit) private readonly repo: Repository<Unit>) { }

	public async getAll() {
		return this.repo.find();
	}
}