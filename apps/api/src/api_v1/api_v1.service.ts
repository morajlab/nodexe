import { join } from "path";
import { HttpService } from "@nestjs/axios";
import { createReadStream } from "fs";
import { Injectable, StreamableFile } from "@nestjs/common";
import { spawnSync } from "child_process";
import { Observable, map } from "rxjs";
import type { AxiosResponse } from "axios";

@Injectable()
export class API_V1_Service {
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

  getTargets(): Observable<AxiosResponse<{ name: string }[]>> {
    return this.httpService
      .get("https://api.github.com/repos/nexe/nexe/releases", {
        params: {
          per_page: 1,
        },
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
      .pipe(
        map(({ data }: AxiosResponse<any[]>) =>
          data[0].assets.map(({ name }) => name)
        )
      );
  }
}
