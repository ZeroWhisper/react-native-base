const path = require("path");

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        paths: [
          {
            rootPathSuffix: "./src",
            rootPathPrefix: "~/"
          }
        ]
      }
    ]
  ],
  env: {
    production: {
      plugins: [
        "babel-plugin-root-import",
        { rootPathSuffix: path.dirname(__dirname, "src") }
      ]
    }
  }
};
