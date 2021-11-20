import { Bare } from "@/apps/web-app/components";
import { Button, Title, Text, Center } from "@mantine/core";
import { useTranslation } from "react-i18next";
import type { OverviewComponent } from "./Overview.types";

import styles from "./Overview.module.css";

export const Overview: OverviewComponent = ({ startOnClick, ...rest }) => {
  const { t } = useTranslation();

  return (
    <Bare {...rest}>
      <Center>
        <Text weight={700} transform="capitalize">
          {t("nodexe")}
        </Text>
        <Title order={3}>{t("overview-title")}</Title>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
          onClick={startOnClick}
        >
          Getting Started
        </Button>
      </Center>
    </Bare>
  );
};

export default Overview;
