import type { NexeOptions } from "nexe";
import type { IPlaygroundProps } from "../playground";

export interface INexeProps extends IPlaygroundProps {
  targets: NexeOptions["targets"];
  input?: string;
  output?: string;
}
