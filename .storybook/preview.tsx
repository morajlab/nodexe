import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import type { Parameters, DecoratorFn } from "@storybook/react";
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

export const decorators: DecoratorFn[] = [
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
];

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
