const path = require("path");
module.exports = ({
  config,
  transpilePackages = ["lit-html", "lit-element"]
}) => {
  // this is a separate config for only those packages
  // the main storybook will use the .babelrc which is needed so storybook itself works in IE
  config.module.rules.push({
    test: new RegExp(
      `node_modules(\\/|\\\\)(${transpilePackages.join("|")})(.*)\\.js$`
    ),
    use: {
      loader: "babel-loader",
      options: {
        plugins: [
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-object-rest-spread"
        ],
        presets: [
          [
            "@babel/preset-env",
            {
              useBuiltIns: "entry",
              corejs: "3"
            }
          ]
        ],
        babelrc: false
      }
    }
  });

  return config;
};
