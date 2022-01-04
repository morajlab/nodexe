import React, { useState } from "react";
import { AppShell, Overview, Steps } from "@/components";

export const Index = () => {
  const [view, setActiveView] = useState("overview");

  return (
    <AppShell view={view}>
      <Overview startOnClick={() => setActiveView("steps")} key="overview" />
      <Steps key="steps" />
    </AppShell>
  );
};

export default Index;
