import { Bare } from "@/apps/web-app/components";
import { Skeleton as MantineSkeleton, Center } from "@mantine/core";
import { useTranslation } from "react-i18next";
import type { SkeletonComponent } from "./Skeleton.types";

import styles from "./Skeleton.module.css";

export const Skeleton: SkeletonComponent = ({ ...rest }) => {
  const { t } = useTranslation();

  return (
    <MantineSkeleton {...rest}>
      <Center className={styles.root}>
        <Bare className={styles.content}>{t("no-package-info")}</Bare>
      </Center>
    </MantineSkeleton>
  );
};

export default Skeleton;
