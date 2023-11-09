import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PropertyModule } from "./modules/property/property.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "./config/config.service";
import { UnitGroupModule } from "./modules/unitGroup/unitGroup.module";
import { ARIUpdateModule } from "./modules/ariUpdates/ariUpdate.module";

@Module({
	imports: [
		TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
		PropertyModule,
		UnitGroupModule,
		ARIUpdateModule,
	],
	controllers: [ AppController ],
	providers: [ AppService ],
})
export class AppModule {}
