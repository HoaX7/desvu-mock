import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Property } from "./property.entity";

@Injectable()
export class PropertyService {
	constructor(@InjectRepository(Property) private readonly repo: Repository<Property>) { }

	public async getAll() {
		return this.repo.find();
	}

	public async fetchReservations() {
		return this.repo.find();
	}
}