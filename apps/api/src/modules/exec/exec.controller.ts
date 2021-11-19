import { Controller, Get, Param, StreamableFile } from "@nestjs/common";
import { ExecService } from "./exec.service";

@Controller()
export class ExecController {
  constructor(private readonly appService: ExecService) {}

  @Get("compile/:module")
  async getExecutable(
    @Param("module") module: string
  ): Promise<StreamableFile | string> {
    return await this.appService.getExecutable(module);
  }
}
