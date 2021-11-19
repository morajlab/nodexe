import { Controller, Get, Param } from "@nestjs/common";
import { TargetService } from "./target.service";

@Controller()
export class TargetController {
  constructor(private readonly appService: TargetService) {}

  @Get("targets")
  getAllTargets() {
    return this.appService.getTargets();
  }

  @Get("targets/:type")
  getTargetsByType(@Param("type") type: string) {
    return this.appService.getTargets({ type });
  }

  @Get("targets/:arch")
  getTargetsByArchitecture(@Param("arch") arch: string) {
    return this.appService.getTargets({ arch });
  }

  @Get("targets/:type/:arch")
  getTargetsByArchAndType(@Param() { type, arch }) {
    return this.appService.getTargets({ arch, type });
  }
}
