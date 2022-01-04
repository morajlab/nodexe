import { AppShell as MantineAppShell } from "@mantine/core";
import { Header } from "@/components";
import { common } from "@/styles";
import type { AppShellComponent } from "./AppShell.types";

import styles from "./AppShell.module.css";

export const AppShell: AppShellComponent = ({ ...rest }) => (
  <MantineAppShell
    padding="md"
    header={<Header />}
    className={`${styles.root} ${common().solid}`}
    styles={{ body: { flexGrow: 1 }, main: { display: "flex" } }}
    {...rest}
  />
);

export default AppShell;
