import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as xmlParser from "express-xml-bodyparser";

/**
 * All files are linted with eslint and prettier configurations.
 * To view all rules see `.eslintrc.js`
 */
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(xmlParser());
	await app.listen(3000);
}
bootstrap();
