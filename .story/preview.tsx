import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import type { DecoratorFn, Parameters } from "@storybook/react";
import { AppShell } from "../components";
import { resources } from "../i18n";

import "../styles/styles.css";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

interface IMJWStoryPreviewProps {
  decorators: DecoratorFn[];
  parameters: Parameters;
}

export default (config: IMJWStoryPreviewProps): IMJWStoryPreviewProps => {
  Object.assign(config, {
    decorators: [
      (Story) => (
        <MantineProvider
          theme={{
            colorScheme: "dark",
          }}
        >
          <NormalizeCSS />
          <GlobalStyles />
          <AppShell>
            <Story />
          </AppShell>
        </MantineProvider>
      ),
    ] as IMJWStoryPreviewProps["decorators"],
  });

  return config;
};