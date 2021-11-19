import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TargetController } from "./target.controller";
import { TargetService } from "./target.service";

@Module({
  imports: [HttpModule],
  controllers: [TargetController],
  providers: [TargetService],
})
export class TargetModule {}
