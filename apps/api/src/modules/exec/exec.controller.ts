import { Controller, Get, Param, StreamableFile } from "@nestjs/common";
import { ExecService } from "./exec.service";

@Controller("compile")
export class ExecController {
  constructor(private readonly appService: ExecService) {}

  @Get(":module/:targets")
  async getExecutable(
    @Param() { module, targets }
  ): Promise<StreamableFile | string> {
    return await this.appService.getExecutable({ module, targets });
  }
}
