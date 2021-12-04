import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { Console } from "@morajlab/npm.vanilla.utils.console";
import type { ITaskProps } from "./cli.types";
// import { scriptName } from "yargs";

export class Cli {
  private argv: any;

  constructor(argv: string[]) {
    this.argv = yargs(hideBin(argv)).argv;
  }

  getArgs = (name?: string) =>
    name ? (this.argv[name] ?? "").toString() : this.argv;

  checkArgs = (tasks: ITaskProps[]): { [key: string]: () => Promise<any> } => {
    const result = {};

    for (const { name, task, description, options } of Object.values(tasks)) {
      let taskObject = { [name]: task };
      let lostOpts: string[] = [];

      if (options) {
        lostOpts = Object.keys(options).filter(
          (opt) => !this.getArgs(opt.replace("--", ""))
        );
      }

      if (lostOpts.length > 0) {
        taskObject = {
          [name]: async () => {
            lostOpts.forEach((opt) =>
              Console.error(`option "${opt}" is not defined for "${name}"`)
            );
          },
        };
      }

      if (description) {
        (taskObject[name] as any).description = description;
      }

      if (options) {
        (taskObject[name] as any).flags = options;
      }

      Object.assign(result, taskObject);
    }

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
