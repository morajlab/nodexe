import type { NodexeComponent } from "@/apps/web-app/types";

export interface IDropzoneProps {}

export type DropzoneComponent<T = {}> = NodexeComponent<
  Omit<T, "children" | "onDrop" | "maxSize"> & IDropzoneProps
>;
