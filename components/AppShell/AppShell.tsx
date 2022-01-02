import { AppShell as MantineAppShell } from "@mantine/core";
import { Header } from "@/apps/web-app/components";
import { common } from "@/apps/web-app/styles";
import type { AppShellComponent } from "./AppShell.types";

import styles from "./AppShell.module.css";

export const AppShell: AppShellComponent = ({ view, children, ...rest }) => {
  const childrens = Array.isArray(children) ? children : [children];
  let activeChild = childrens;

  if (view) {
    activeChild = childrens.filter(({ key }) => key && key === view)[0];
  }

  return (
    <MantineAppShell
      padding="md"
      header={<Header />}
      className={`${styles.root} ${common().solid}`}
      children={activeChild}
      styles={{ body: { flexGrow: 1 }, main: { display: "flex" } }}
      {...rest}
    />
  );
};

export default AppShell;
