const withTM = require("next-transpile-modules")([
  "@morajlab/npm.react.components.bare",
  "@morajlab/npm.react.utils.style",
  "@morajlab/npm.react.styles.common",
  "@morajlab/npm.config.typescript",
  "@morajlab/npm.react.types.common",
]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
});
