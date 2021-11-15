import { resolve } from "path";
import { series } from "gulp";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

// Tasks
import { Playgorund } from "./playground";
import { Nexe } from "./nexe";

const { argv } = yargs(hideBin(process.argv));

if (
  (argv._.includes("installModule") || argv._.length == 0) &&
  !argv["module"]
) {
  console.log();
  process.exit(1);
}

const ROOT_PATH = resolve(process.cwd(), "..");
const MODULE = (argv["module"] ?? "").toString();

const { cleanPlayground, npmInit, installModule } = new Playgorund({
  root: ROOT_PATH,
  module: MODULE,
});

const { compile } = new Nexe({
  root: ROOT_PATH,
  module: MODULE,
  targets: ["linux-x64-14.15.3"],
  input: "lib/bin.js",
});

export { cleanPlayground, npmInit, installModule, compile };

export default series(cleanPlayground, npmInit, installModule, compile);
