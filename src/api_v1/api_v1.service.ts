import { Injectable } from "@nestjs/common";

@Injectable()
export class API_V1_Service {
  getHello(): string {
    return "API Controller";
  }
}
