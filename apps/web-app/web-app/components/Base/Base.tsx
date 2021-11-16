import { Bare } from "@/apps/web-app/components";
import type { BasicComponent } from "./Base.types";

import styles from "./Base.module.css";

export const Basic: BasicComponent = (props) => (
  <Bare className={styles.root} {...props} />
);

export default Basic;
