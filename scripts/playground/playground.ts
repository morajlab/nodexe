import { exec } from "child_process";
import { resolve } from "path";
import * as del from "del";

const _directory = "playground";

export const cleanPlayground =
  ({ root, directory = _directory }: { root: string; directory?: string }) =>
  async () =>
    del(
      [
        resolve(root, `${directory}/**/*`),
        `!${resolve(root, `${directory}/.gitkeep`)}`,
      ],
      { force: true }
    );

export const npmInit =
  ({ root, directory = _directory }: { root: string; directory?: string }) =>
  async (cb: Function) => {
    exec(
      `cd ${resolve(root, directory)} && npm init -y`,
      (err, stdout, stderr) => {
        cb(err);
        cb(stderr);
        cb(stdout);
      }
    );
  };
