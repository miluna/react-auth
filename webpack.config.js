const packageJson = require("./package.json");
const path = require("path");

module.exports = {
  entry: "./src/index",
  target: "node",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index.js",
    library: packageJson.name,
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  externals: Object.keys(packageJson.peerDependencies)
};
