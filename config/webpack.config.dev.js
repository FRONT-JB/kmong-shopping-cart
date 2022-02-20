const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  target: 'web',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].[contenthash].js',
    publicPath: '/',
  },
  optimization: {
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
    onBeforeSetupMiddleware: (devServer) => {
      devServer.app.get('/api/fruits', (req, res) => {
        res.json([
          {
            id: 1,
            name: '바나나',
            image: '🍌',
            stock: 10,
            price: 4000,
            isPrime: true,
          },
          {
            id: 2,
            name: '딸기',
            image: '🍓',
            stock: 5,
            price: 10000,
            isPrime: true,
          },
          {
            id: 3,
            name: '멜론',
            image: '🍈',
            stock: 5,
            price: 20000,
            isPrime: true,
          },
          {
            id: 4,
            name: '파인애플',
            image: '🍍',
            stock: 10,
            price: 5000,
            isPrime: true,
          },
          {
            id: 5,
            name: '복숭아',
            image: '🍑',
            stock: 10,
            price: 8000,
            isPrime: false,
          },
          {
            id: 6,
            name: '포도',
            image: '🍇',
            stock: 5,
            price: 6000,
            isPrime: false,
          },
          {
            id: 7,
            name: '수박',
            image: '🍉',
            stock: 2,
            price: 22000,
            isPrime: false,
          },
          {
            id: 8,
            name: '사과',
            image: '🍎',
            stock: 12,
            price: 4000,
            isPrime: false,
          },
          {
            id: 9,
            name: '토마토',
            image: '🍅',
            stock: 4,
            price: 2000,
            isPrime: false,
          },
          {
            id: 10,
            name: '레몬',
            image: '🍋',
            stock: 8,
            price: 10000,
            isPrime: false,
          },
          {
            id: 11,
            name: '체리',
            image: '🍒',
            stock: 4,
            price: 25000,
            isPrime: true,
          },
          {
            id: 12,
            name: '오렌지',
            image: '🍊',
            stock: 10,
            price: 6000,
            isPrime: true,
          },
        ]);
      });
      devServer.app.post('/api/purchase', (req, res) => {
        res.json(200);
      });
    },
  },
});
