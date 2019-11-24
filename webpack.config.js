const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageMin = require('imagemin-webpack-plugin').default;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = (env, argv) => {
  const isDev = argv && argv.mode === 'development';

  return {
    entry: {
      app: 'src/client/index.tsx',
    },
    output: {
      path: path.resolve(__dirname, 'build/public'),
      filename: isDev ? '[name].js' : '[name].[hash].js',
      chunkFilename: isDev ? '[name].js' : '[name].[hash].js',
    },
    devtool: isDev ? 'eval' : 'nosources-source-map',
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      extensions: ['.js', '.tsx'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /.ts(x?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
        {
          enforce: 'pre',
          test: /.js$/,
          loader: 'source-map-loader',
        },
        {
          test: /\.(jpg|png|svg|gif|woff|woff2|eot|ttf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets',
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /.css$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true, importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        },
      ],
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer',
      }),
      new MiniCssExtractPlugin({
        moduleFilename: ({ name }) => `${name}_${new Date().toISOString()}.css`,
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      }),
      new ImageMin({
        disable: isDev,
        cache: true,
        imageminOptions: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            [
              'svgo',
              {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            ],
          ],
        },
      }),
      new BundleAnalyzer({
        analyzerMode: isDev ? 'static' : 'disabled',
        openAnalyzer: false,
      }),
    ],
    devServer: {
      contentBase: path.resolve(__dirname, 'build/public'),
      port: 3000,
      hot: true,
      writeToDisk: false,
      compress: true,
      historyApiFallback: true,
      proxy: {},
      stats: {
        assetsSort: 'size',
        assets: false,
        cached: false,
        children: false,
        publicPath: false,
        chunks: false,
        hash: false,
        colors: true,
        version: false,
      },
      after: () => {
        console.clear();
      },
    },
  };
};


module.exports = webpackConfig;
