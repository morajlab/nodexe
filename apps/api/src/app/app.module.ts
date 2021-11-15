import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { API_V1_Module } from "../api_v1/api_v1.module";

@Module({
  imports: [API_V1_Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
