import { Injectable } from "@nestjs/common";
import { spawn, spawnSync } from "child_process";

@Injectable()
export class API_V1_Service {
  install_module(module: string): string {
    const dirName = "playground";

    spawnSync("rm", ["-rf", `./${dirName}`]);
    spawnSync("mkdir", [dirName]);
    spawnSync("cd", [`./${dirName}`]);
    spawnSync("npm", ["init", "-y"]);

    const child = spawn("npm", ["install", module]);

    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");

    child.stdout.on("data", (chunk) => {
      console.log(chunk);
    });

    child.stderr.on("data", (error) => {
      console.log(error);
    });

    child.on("close", (code) => {
      if (code == 0) {
        const glamor = spawn("npx", ["glamor", "--help"]);

        glamor.stdout.on("data", (data) => {
          console.log(data.toString());
        });
      }
      console.log(`child process exited with code ${code}`);
    });

    return `API Controller ${module}`;
  }
}
