const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        }
      }
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias.components = path.resolve(__dirname, "../src/components");
    config.resolve.alias.utils = path.resolve(__dirname, "../src/utils");
    config.resolve.alias.typings = path.resolve(__dirname, "../src/typings");
    config.resolve.alias.consts = path.resolve(__dirname, "../src/consts.ts");

    return config;
  },
  "framework": "@storybook/react"
}