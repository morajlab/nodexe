import { resolve } from "path";
import { series } from "gulp";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

// Tasks
import { Playgorund } from "./playground";

const { argv } = yargs(hideBin(process.argv));

if (
  (argv._.includes("installModule") || argv._.length == 0) &&
  !argv["module"]
) {
  console.log();
  process.exit(1);
}

const ROOT_PATH = resolve(process.cwd(), "..");

const { cleanPlayground, npmInit, installModule } = new Playgorund({
  root: ROOT_PATH,
  module: (argv["module"] ?? "").toString(),
});

export { cleanPlayground, npmInit, installModule };

export default series(cleanPlayground, npmInit, installModule);
