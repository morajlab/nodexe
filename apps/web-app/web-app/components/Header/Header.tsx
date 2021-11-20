import { Header as MantineHeader } from "@mantine/core";
import type { HeaderComponent } from "./Header.types";

import styles from "./Header.module.css";

export const Header: HeaderComponent = ({ ...rest }) => (
  <MantineHeader height={60} padding="xs" {...rest}>
    {/* Header content */}
  </MantineHeader>
);

export default Header;
