import { resolve, join } from "path";
import { Console } from "@morajlab/vanilla.utils.console";
import { compile as nexeCompile } from "nexe";
import type { INexeProps } from "./nexe.types";

export class Nexe {
  private input: string;
  private targets: INexeProps["targets"];
  private output: string;

  constructor({
    root,
    module,
    targets,
    directory = "playground",
    output,
    input = "",
  }: INexeProps) {
    directory = resolve(root, directory);
    this.output = join(directory, output ?? module);
    this.targets = targets;
    this.input = join(directory, "node_modules", module, input);
  }

  compile = async () => {
    try {
      await nexeCompile({
        input: this.input,
        output: this.output,
        targets: this.targets,
      });

      Console.success("compileTask completed successfully");
    } catch (error) {
      Console.error(error.message);
    }
  };
}
