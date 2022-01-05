export default (config: any) =>
  Object.assign(config, {
    stories: [
      ...config.stories,
      "../components/**/*.stories.mdx",
      "../components/**/*.stories.@(js|jsx|ts|tsx)",
    ],
  });
