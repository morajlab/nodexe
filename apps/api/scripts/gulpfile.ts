import { resolve } from "path";
import { series } from "gulp";
import { Cli } from "./cli";

// Tasks
import { Playgorund } from "./playground";
import { Nexe } from "./nexe";

// Cli options
const options = {
  installModule: ["--module"],
  compile: ["--input", "--targets", "--module"],
};

const { getArgs, checkArgs } = new Cli({ argv: process.argv, options });

const ROOT_PATH = resolve(process.cwd(), "..");
const MODULE = getArgs("module");

const { cleanPlayground, npmInit, installModule } = new Playgorund({
  root: ROOT_PATH,
  module: MODULE,
});

const { compile } = new Nexe({
  root: ROOT_PATH,
  module: MODULE,
  targets: getArgs("targets").split(","),
  input: getArgs("input"),
});

export const cleanPlaygroundTask = () => {
  return cleanPlayground();
};

export const npmInitTask = () => {
  return npmInit();
};

export const installModuleTask = () => {
  const check = checkArgs({ task: "installModule" });

  return check === true ? installModule() : check;
};

export const compileTask = () => {
  const check = checkArgs({ task: "compile" });

  return check === true ? compile() : check;
};

export default async () => {
  const check = checkArgs();

  return check === true
    ? series(cleanPlayground, npmInit, installModule, compile)
    : check;
};
