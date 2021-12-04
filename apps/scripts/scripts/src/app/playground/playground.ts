import { execSync } from "child_process";
import { resolve, join } from "path";
import { Console } from "@morajlab/npm.vanilla.utils.console";
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

      Console.success("cleanPlaygroundTask completed successfully");
    } catch (error) {
      Console.error(error.message);
    }
  };

  npmInit = async () => {
    try {
      execSync(`cd ${this.directory} && npm init -y`);

      Console.success("npmInitTask completed successfully");
    } catch (error) {
      Console.error(error.message);
    }
  };

  installModule = async () => {
    try {
      execSync(`cd ${this.directory} && npm i ${this.module}`);

      Console.success("installModuleTask completed successfully");
    } catch (error) {
      Console.error(error.message);
    }
  };
}
