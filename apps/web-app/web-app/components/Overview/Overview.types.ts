import type { INodexeBareProps, NodexeComponent } from "@/apps/web-app/types";

export interface IOverviewProps extends INodexeBareProps {
  startOnClick: () => void;
}

export type OverviewComponent = NodexeComponent<IOverviewProps>;
