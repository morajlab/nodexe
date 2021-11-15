import { Injectable } from "@nestjs/common";
import { spawn } from "child_process";

@Injectable()
export class API_V1_Service {
  install_module(module: string): string {
    const child = spawn("npm", ["run", "gulp", "--", "--module", module]);

    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");

    child.stdout.on("data", (chunk) => {
      console.log(chunk);
    });

    child.stderr.on("data", (error) => {
      console.log(error);
    });

    child.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
    });

    return `API Controller ${module}`;
  }
}
