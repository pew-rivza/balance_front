const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: Сделать конфигурацию под себя
// TODO: настроить hmr
// TODO: а sass точно нужен в зависимостях от продакшана (package.json)? его лучше вообще выпилить и без этого работало

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  target: 'web',
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.s([ac])ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          'sass-loader'
        ]
      }
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
  ]
}