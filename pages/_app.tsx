import { Fragment } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "@/i18n";

import "@/styles/styles.css";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const App = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
      <title>Nodexe</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>

    <MantineProvider
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "dark",
      }}
    >
      <NormalizeCSS />
      <GlobalStyles />
      <Component {...pageProps} />
    </MantineProvider>
  </Fragment>
);

export default App;
