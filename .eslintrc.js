module.exports = {
  extends: [
    "@mantine/eslint-config",
    "next/core-web-vitals",
    "plugin:storybook/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
