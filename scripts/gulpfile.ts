import { resolve } from "path";
import { series } from "gulp";

import { cleanPlayground, npmInit } from "./playground/playground";

const ROOT_PATH = resolve(process.cwd(), "..");

export default series(
  cleanPlayground({ root: ROOT_PATH }),
  npmInit({ root: ROOT_PATH })
);
