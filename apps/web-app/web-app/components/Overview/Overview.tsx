import { Bare } from "@/apps/web-app/components";
import { Button } from "@mantine/core";
import type { OverviewComponent } from "./Overview.types";

import styles from "./Overview.module.css";

export const Overview: OverviewComponent = ({ startOnClick, ...rest }) => (
  <Bare {...rest}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam
      minus qui iure? Ex possimus maiores architecto fuga quam, laborum minima
      impedit, perspiciatis id nihil laudantium cumque soluta dolor ipsa!
    </p>
    <Button onClick={startOnClick}>Getting Started</Button>
  </Bare>
);

export default Overview;
