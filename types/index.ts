import type { IBareProps } from "@morajlab/npm.react.components.bare";
import type { MLComponent } from "@morajlab/npm.react.types.common";

export interface INodexeBareProps extends IBareProps {}

export type NodexeComponent<T = {}> = MLComponent<T>;

export interface INexeTarget {
  platform?: string;
  arch?: string;
  version?: string;
}
