import { useState } from "react";
import { Bare } from "@/apps/web-app/components";
import { Stepper, Button, Group } from "@mantine/core";
import type { StepsComponent } from "./Steps.types";

import styles from "./Steps.module.css";

export const Steps: StepsComponent = ({ ...rest }) => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Bare {...rest}>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Fist step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
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
