import { execSync } from "child_process";
import { resolve, join } from "path";
import del from "del";
import type { IPlaygroundProps } from "./playground.types";

export class Playgorund {
  private directory: string;
  private module: string;

  constructor({ root, module, directory }: IPlaygroundProps) {
    this.module = module;
    this.directory = resolve(root, directory ?? "playground");
  }

  cleanPlayground = async () =>
    del(
      [join(this.directory, "**/*"), `!${join(this.directory, ".gitkeep")}`],
      { force: true }
    );

  npmInit = async () => execSync(`cd ${this.directory} && npm init -y`);

  installModule = async () => {
    if (!this.module) {
      throw new Error("module name not found !");
    }

    execSync(`cd ${this.directory} && npm i ${this.module}`);
  };
}
