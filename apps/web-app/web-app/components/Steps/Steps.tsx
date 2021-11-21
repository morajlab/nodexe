import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Bare, Dropzone } from "@/apps/web-app/components";
import { Stepper, Button, Group } from "@mantine/core";
import type { StepsComponent } from "./Steps.types";

import styles from "./Steps.module.css";

export const Steps: StepsComponent = ({ ...rest }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Bare {...rest}>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label={t("step-1-label")} description={t("step-1-desc")}>
          <Dropzone />
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

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </Bare>
  );
};

export default Steps;
