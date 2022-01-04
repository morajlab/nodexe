import type { NodexeComponent } from "@/types";

export interface IDropzoneProps {}

export type DropzoneComponent<T = {}> = NodexeComponent<
  Omit<T, "children" | "onDrop" | "maxSize"> & IDropzoneProps
>;
