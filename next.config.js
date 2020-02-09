const withCSS = require("@zeit/next-css");
const withSourceMaps = require("@zeit/next-source-maps");
const withImages = require("next-images");
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = withImages(
  withCSS(
    withSourceMaps({
      webpack: config => {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
        return config;
      }
    })
  )
);
