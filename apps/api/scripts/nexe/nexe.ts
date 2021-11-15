import { resolve, join } from "path";
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

  compile = async () =>
    await nexeCompile({
      input: this.input,
      output: this.output,
      targets: this.targets,
    });
}
