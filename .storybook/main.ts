import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import type { StorybookConfig } from "@storybook/react/types";

const config: StorybookConfig = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...((config.resolve.plugins || []) as any),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }

    return config;
  },
};

module.exports = config;
