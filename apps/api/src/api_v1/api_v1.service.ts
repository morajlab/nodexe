import { join } from "path";
import { HttpService } from "@nestjs/axios";
import { createReadStream } from "fs";
import { Injectable, StreamableFile } from "@nestjs/common";
import { spawnSync } from "child_process";
import { map } from "rxjs";

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

  getTargets({ type, arch }: { type?: string; arch?: string } = {}) {
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
        map(({ data }) => ({
          targets: data[0].assets
            .map(({ name }) => name)
            .filter((name: string) => {
              const nameArray = name.split("-");

              if (type && arch) {
                return nameArray[0] === type && nameArray[1] === arch;
              }

              if (type) {
                return nameArray[0] === type;
              }

              if (arch) {
                return nameArray[1] === arch;
              }

              return true;
            }),
        }))
      );
  }
}
