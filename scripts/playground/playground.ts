import { resolve } from "path";
import * as del from "del";

export const cleanPlayground =
  ({ root, directory = "playground" }: { root: string; directory?: string }) =>
  async () =>
    del(
      [
        resolve(root, `${directory}/**/*`),
        `!${resolve(root, `${directory}/.gitkeep`)}`,
      ],
      { force: true }
    );
