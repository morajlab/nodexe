import { resolve } from "path";
import { series } from "gulp";

import { cleanPlayground } from "./playground/playground";

const ROOT_PATH = resolve(process.cwd(), "..");

export default series(cleanPlayground({ root: ROOT_PATH }));
