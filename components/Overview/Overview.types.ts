import type { INodexeBareProps, NodexeComponent } from "@/types";

export interface IOverviewProps extends INodexeBareProps {
  startOnClick: () => void;
}

export type OverviewComponent = NodexeComponent<IOverviewProps>;
