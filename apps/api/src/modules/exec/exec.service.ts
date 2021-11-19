import { join } from "path";
import { HttpService } from "@nestjs/axios";
import { createReadStream } from "fs";
import { Injectable, StreamableFile } from "@nestjs/common";
import { spawnSync } from "child_process";

@Injectable()
export class ExecService {
  constructor(private readonly httpService: HttpService) {}

  async getExecutable(module: string): Promise<StreamableFile | string> {
    const child = spawnSync("npm", ["run", "gulp", "--", "--module", module], {
      encoding: "utf8",
    });

    if (child.error) {
      return child.error.message;
    }

    const file = createReadStream(join(process.cwd(), "playground", module));

    return new StreamableFile(file);
  }
}
