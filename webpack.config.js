const path = require("path");
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: "./client/app.js",
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "babel/preset-react"]
          }
        }
      }
    ]
  }
};