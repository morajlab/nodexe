import { AppShell as MantineAppShell } from "@mantine/core";
import { Header } from "@/apps/web-app/components";
import { common } from "@/apps/web-app/styles";
import type { AppShellComponent } from "./AppShell.types";

import styles from "./AppShell.module.css";

export const AppShell: AppShellComponent = ({ children, ...rest }) => (
  <MantineAppShell
    padding="md"
    header={<Header />}
    className={`${styles.root} ${common().solid}`}
    children={children}
    {...rest}
  />
);

export default AppShell;
