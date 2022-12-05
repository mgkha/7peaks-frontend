const path = require("path");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  webpack: {
    plugins: [new VanillaExtractPlugin()],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
