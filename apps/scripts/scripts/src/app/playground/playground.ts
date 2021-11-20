import { execSync } from "child_process";
import { resolve, join } from "path";
import { log } from "../log";
import del from "del";
import type { IPlaygroundProps } from "./playground.types";

export class Playgorund {
  private directory: string;
  private module: string;

  constructor({ root, module, directory }: IPlaygroundProps) {
    this.module = module;
    this.directory = resolve(root, directory ?? "playground");
  }

  cleanPlayground = async () => {
    try {
      del(
        [join(this.directory, "**/*"), `!${join(this.directory, ".gitkeep")}`],
        { force: true }
      );

      log("cleanPlaygroundTask completed successfully", "SUCCESS");
    } catch (error) {
      log(error.message, "ERROR");
    }
  };

  npmInit = async () => {
    try {
      execSync(`cd ${this.directory} && npm init -y`);

      log("npmInitTask completed successfully", "SUCCESS");
    } catch (error) {
      log(error.message, "ERROR");
    }
  };

  installModule = async () => {
    try {
      execSync(`cd ${this.directory} && npm i ${this.module}`);

      log("installModuleTask completed successfully", "SUCCESS");
    } catch (error) {
      log(error.message, "ERROR");
    }
  };
}
