import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ExecModule, TargetModule } from "../modules";

@Module({
  imports: [TargetModule, ExecModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
