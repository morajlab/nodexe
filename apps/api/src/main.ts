/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app/app.module";
import nodexeConfig from "../../../nodexe.json";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    defaultVersion: "1",
    type: VersioningType.URI,
  });
  app.setGlobalPrefix("api");

  const port =
    nodexeConfig?.development?.["api:port"] || process.env.PORT || 3333;
  const config = new DocumentBuilder()
    .setTitle("Nodexe")
    .setDescription("Nodexe API")
    .setVersion("1.0")
    .addTag("nodexe")
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document);

  await app.listen(port, () => {
    Logger.log("Listening at http://localhost:" + port);
  });
}

bootstrap();
