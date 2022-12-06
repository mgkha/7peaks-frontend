const path = require("path");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");

module.exports = {
  style: {
    css: {
      loaderOptions: {
        url: false,
      },
    },
  },
  webpack: {
    plugins: [new VanillaExtractPlugin()],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      const moduleScopePlugin = webpackConfig.resolve.plugins.find(
        (plugin) => plugin instanceof ModuleScopePlugin
      );
      moduleScopePlugin.allowedPaths.push(
        path.resolve(__dirname, "node_modules/@vanilla-extract/webpack-plugin")
      );

      return webpackConfig;
    },
  },
};
