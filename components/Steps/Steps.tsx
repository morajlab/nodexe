import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropzone, Skeleton } from "@/apps/web-app/components";
import {
  Stepper,
  Button,
  Group,
  Input,
  SimpleGrid,
  Divider,
} from "@mantine/core";
import { Search } from "react-feather";
import type { StepsComponent } from "./Steps.types";

import styles from "./Steps.module.css";

export const Steps: StepsComponent = ({ ...rest }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Group
      direction="column"
      noWrap={true}
      grow={true}
      className={styles.root}
      {...rest}
    >
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label={t("step-1-label")} description={t("step-1-desc")}>
          <SimpleGrid cols={2} spacing="lg">
            <Group direction="column" grow={true}>
              <Input
                placeholder={t("input-package-name")}
                type="text"
                icon={<Search />}
              />
              <Divider
                my="xs"
                label={t("or")}
                labelPosition="center"
                variant="dashed"
              />
              <Dropzone />
            </Group>
            <Skeleton />
          </SimpleGrid>
        </Stepper.Step>
        <Stepper.Step label={t("step-2-label")} description={t("step-2-desc")}>
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label={t("step-3-label")} description={t("step-3-desc")}>
          Step 3 content: Get full access
        </Stepper.Step>
      </Stepper>
      {active === 3 && (
        <div>Form completed, click back button to get to previous step</div>
      )}
      <Group position="right" align="center" style={{ flexGrow: 0 }}>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </Group>
  );
};

export default Steps;
