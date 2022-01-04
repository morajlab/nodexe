import type { INodexeBareProps, NodexeComponent } from "@/types";

export interface IAppShellProps extends INodexeBareProps {
  view?: string;
}

export type AppShellComponent = NodexeComponent<IAppShellProps>;
