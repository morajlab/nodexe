import { Fragment } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core";

import "./styles.css";

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
