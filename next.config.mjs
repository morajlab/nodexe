import withTM from "next-transpile-modules";

/** @type {import("next").NextConfig} */
export default withTM([
  "@morajlab/npm.react.components.bare",
  "@morajlab/npm.react.utils.style",
  "@morajlab/npm.react.styles.common",
  "@morajlab/npm.config.typescript",
  "@morajlab/npm.react.types.common",
])({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
});
