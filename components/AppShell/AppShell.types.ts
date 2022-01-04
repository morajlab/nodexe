import type { NodexeComponent } from "@/types";
import type { AppShellProps } from "@mantine/core";

export interface IAppShellProps
  extends Omit<AppShellProps, "padding" | "header" | "className" | "styles"> {}

export type AppShellComponent = NodexeComponent<IAppShellProps>;
