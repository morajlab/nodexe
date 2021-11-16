import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { bgRed } from "chalk";
import type { ICheckArgsProps, ICliProps } from "./cli.types";
// import { scriptName } from "yargs";

export class Cli {
  private argv: any;
  private options: ICliProps["options"];

  constructor({ options, argv }: ICliProps) {
    this.options = options;
    this.argv = yargs(hideBin(argv)).argv;
  }

  getArgs = (name?: string) =>
    name ? (this.argv[name] ?? "").toString() : this.argv;

  checkArgs = ({ task }: ICheckArgsProps = {}) => {
    let result: boolean | (() => Promise<void>) = true;

    Object.values(task ? [this.options[task]] : this.options).forEach(
      (opts) => {
        opts.forEach((opt) => {
          if (!this.getArgs(opt.replace("--", ""))) {
            result = (async () => {
              console.log();
              console.log(bgRed(`ERROR: option ${opt} is not defined !`));
              console.log();
            })() as any;

            return;
          }
        });
      }
    );

    return result;
  };
}

// scriptName("pirate-parser")
//   .usage("$0 <cmd> [args]")
//   .command(
//     "hello [name]",
//     "welcome ter yargs!",
//     (yargs) => {
//       yargs.positional("name", {
//         type: "string",
//         default: "Cambi",
//         describe: "the name to say hello to",
//       });
//     },
//     function (argv) {
//       console.log("hello", argv.name, "welcome to yargs!");
//     }
//   )
//   .showHelp();
