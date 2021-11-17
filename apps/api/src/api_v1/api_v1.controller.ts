import { Controller, Get, Param, StreamableFile } from "@nestjs/common";
import { API_V1_Service } from "./api_v1.service";

@Controller("api/v1")
export class API_V1_Controller {
  constructor(private readonly appService: API_V1_Service) {}

  @Get("compile/:module")
  async getExecutable(
    @Param("module") module: string
  ): Promise<StreamableFile | string> {
    return await this.appService.getExecutable(module);
  }

  @Get("targets")
  getTargets() {
    return this.appService.getTargets();
  }
}
