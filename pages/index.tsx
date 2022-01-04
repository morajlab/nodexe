import { Button, Title, Text, Center, Group } from "@mantine/core";
import { useTranslation } from "react-i18next";

export const Index = () => {
  const { t } = useTranslation();

  return (
    <Center>
      <Group direction="column">
        <Text weight={700} transform="capitalize">
          {t("nodexe")}
        </Text>
        <Title order={3}>{t("overview-title")}</Title>
        <Button<"a">
          component="a"
          href="/package"
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
        >
          Getting Started
        </Button>
      </Group>
    </Center>
  );
};

export default Index;
