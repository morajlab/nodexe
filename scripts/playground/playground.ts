import { execSync } from "child_process";
import { resolve, join } from "path";
import * as del from "del";
import type { IPlaygroundProps } from "./playground.types";

export class Playgorund {
  private directory: string;
  private root: string;
  private module: string;

  constructor({ root, module, directory }: IPlaygroundProps) {
    this.root = root;
    this.module = module;
    this.directory = resolve(root, directory ?? "playground");
  }

  cleanPlayground = async () =>
    del(
      [join(this.directory, "**/*"), `!${join(this.directory, ".gitkeep")}`],
      { force: true }
    );

  npmInit = async () => execSync(`cd ${this.directory} && npm init -y`);

  installModule = async () =>
    execSync(`cd ${this.directory} && npm i ${this.module}`);
}
