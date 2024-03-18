const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {
  return {
    mode: env.mode,
    entry: {
      app: './index.js',
      // hot: 'webpack/hot/dev-server.js',
      // client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'index.js',
      clean: true
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.DM': JSON.stringify(env.mode)
      }),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      static: {
        directory: __dirname
      },
      compress: true,
      hot: true,
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(woff|woff2|eot|tff|otf)$/i,
          type: 'asset/resource',
        }
      ]
    }
  };
};
