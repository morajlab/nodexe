import type { NodexeComponent, INodexeBareProps } from "@/types";

export interface ISearchInputProps extends INodexeBareProps {}

export type SearchInputComponent = NodexeComponent<ISearchInputProps>;

export interface IRightSectionProps {
  type?: "chevrondown" | "load";
}

export type RightSectionComponent = NodexeComponent<IRightSectionProps>;

export interface ISearchPackageReturnType {
  objects: {
    package: {
      name: string;
    };
  }[];
}

export type SearchPackageFunction = (
  name: string
) => Promise<ISearchPackageReturnType>;
