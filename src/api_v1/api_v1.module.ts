import { Module } from "@nestjs/common";
import { API_V1_Controller } from "./api_v1.controller";
import { API_V1_Service } from "./api_v1.service";

@Module({
  imports: [],
  controllers: [API_V1_Controller],
  providers: [API_V1_Service],
})
export class API_V1_Module {}
