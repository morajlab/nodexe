import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ExecController } from "./exec.controller";
import { ExecService } from "./exec.service";

@Module({
  imports: [HttpModule],
  controllers: [ExecController],
  providers: [ExecService],
})
export class ExecModule {}
