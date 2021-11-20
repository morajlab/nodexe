import { bgRed, bgGreen, bgWhite, bgYellow, Chalk } from "chalk";

const colorBinds: { [key: string]: Chalk } = {
  ERROR: bgRed,
  SUCCESS: bgGreen,
  WARNING: bgYellow,
  INFO: bgWhite,
};

export const log = (
  message?: string,
  type: "ERROR" | "SUCCESS" | "WARNING" | "INFO" = "INFO"
) => console.log(colorBinds[type](type).concat(": ", message));
