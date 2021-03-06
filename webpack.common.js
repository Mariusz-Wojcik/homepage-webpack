const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]!static',
       },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-html.html",
      inject: true,
      chunks: ["index"],
      filename: "nauka-html.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-css.html",
      inject: true,
      chunks: ["index"],
      filename: "nauka-css.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/nauka-javascript.html",
      inject: true,
      chunks: ["index"],
      filename: "nauka-javascript.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/rozwoj-strony.html",
      inject: true,
      chunks: ["index"],
      filename: "rozwoj-strony.html",
    }),
  ],
};
