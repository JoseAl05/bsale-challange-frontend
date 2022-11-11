module.exports = {
  mode: "production",
  entry: [
    "./public/js/index.js",
    "./public/css/tailwind.css",
    "./src/functions/Search.js",
    "./src/views/Categories.js",
    "./src/views/Dashboard.js",
    "./src/views/Layout.js",
    "./src/views/Products.js",
    "./src/views/ProductsByCategory.js",
    "./src/views/ProductsResult.js",
  ],
  output: {
    path: __dirname + "/dist",
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
