import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { map } from "rxjs";

@Injectable()
export class TargetService {
  constructor(private readonly httpService: HttpService) {}

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
