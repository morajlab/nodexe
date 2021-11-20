import { series } from "gulp";
import { Cli, ITaskProps, Playgorund, Nexe } from "./app";

const { getArgs, checkArgs } = new Cli(process.argv);

const ROOT_PATH = process.cwd();
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

const tasks: ITaskProps[] = [
  {
    name: "cleanPlaygroundTask",
    task: cleanPlayground,
    description: "clean [playground] directory",
  },
  {
    name: "npmInitTask",
    task: npmInit,
    description: "initialize npm module",
  },
  {
    name: "installModuleTask",
    task: installModule,
    description: "install node module",
    options: { "--module": "module name" },
  },
  {
    name: "compileTask",
    task: compile,
    description: "compile and create executables from node module",
    options: {
      "--input": "input file path",
      "--targets": "an array of [platform-arch-version]",
      "--module": "module name",
    },
  },
];

const { cleanPlaygroundTask, npmInitTask, installModuleTask, compileTask } =
  checkArgs(tasks);

export { cleanPlaygroundTask, npmInitTask, installModuleTask, compileTask };

export default series(
  cleanPlaygroundTask,
  npmInitTask,
  installModuleTask,
  compileTask
);
