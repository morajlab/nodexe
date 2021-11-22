import { Skeleton as MantineSkeleton } from "@mantine/core";
import type { SkeletonComponent } from "./Skeleton.types";

export const Skeleton: SkeletonComponent = ({ ...rest }) => {
  return <MantineSkeleton {...rest} />;
};

export default Skeleton;
