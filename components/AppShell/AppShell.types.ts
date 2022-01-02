import type { INodexeBareProps, NodexeComponent } from "@/apps/web-app/types";

export interface IAppShellProps extends INodexeBareProps {
  view?: string;
}

export type AppShellComponent = NodexeComponent<IAppShellProps>;
