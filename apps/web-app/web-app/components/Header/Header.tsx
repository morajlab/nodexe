import {
  Header as MantineHeader,
  Avatar,
  ActionIcon,
  Group,
  Text,
  Badge,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { GitHub } from "react-feather";
import type { HeaderComponent } from "./Header.types";

import styles from "./Header.module.css";

export const Header: HeaderComponent = ({ ...rest }) => {
  const { t } = useTranslation();
  const APP_NAME = t("nodexe");

  return (
    <MantineHeader height={70} padding="md" {...rest}>
      <Group align="center" position="apart" noWrap={true}>
        <Group>
          <Avatar src={null} alt={APP_NAME} color="blue" radius="xl">
            {APP_NAME}
          </Avatar>
          <Text weight={700} transform="capitalize">
            {APP_NAME}
          </Text>
          <Badge color="gray">v0.0.1</Badge>
        </Group>
        <Group>
          <ActionIcon variant="filled" radius="xl" size="lg">
            <GitHub size={18} />
          </ActionIcon>
        </Group>
      </Group>
    </MantineHeader>
  );
};

export default Header;
