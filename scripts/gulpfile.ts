import { resolve } from "path";
import { series } from "gulp";

import { Playgorund } from "./playground";

const ROOT_PATH = resolve(process.cwd(), "..");

const { cleanPlayground, npmInit, installModule } = new Playgorund({
  root: ROOT_PATH,
  module: "glamor",
});

export default series(cleanPlayground, npmInit, installModule);
