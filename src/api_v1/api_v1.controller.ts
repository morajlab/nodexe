import { Controller, Get } from "@nestjs/common";
import { API_V1_Service } from "./api_v1.service";

@Controller("api/v1")
export class API_V1_Controller {
  constructor(private readonly appService: API_V1_Service) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
