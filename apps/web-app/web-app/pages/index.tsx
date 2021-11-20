import React, { useState } from "react";
import { AppShell, Overview, Steps } from "@/apps/web-app/components";

export const Index = () => {
  const [view, setActiveView] = useState("overview");

  return (
    <AppShell>
      {view === "overview" ? (
        <Overview startOnClick={() => setActiveView("steps")} />
      ) : (
        <Steps />
      )}
    </AppShell>
  );
};

export default Index;
