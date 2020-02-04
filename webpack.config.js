const path = require("path");

module.exports = {
  entry: "./demo.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "demo.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
