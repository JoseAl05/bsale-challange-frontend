const path = require('path');

module.exports = {
  entry: [
    "./public/css/tailwind.css",
    "./public/js/index.js",
    "./src/functions/Search.js",
    "./src/views/Categories.js",
    "./src/views/Dashboard.js",
    "./src/views/Layout.js",
    "./src/views/Products.js",
    "./src/views/ProductsByCategory.js",
  ],
  output: {
    path: __dirname + "/public" + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'public','css'),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
