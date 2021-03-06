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
            name: 'λ°λλ',
            image: 'π',
            stock: 10,
            price: 4000,
            isPrime: true,
          },
          {
            id: 2,
            name: 'λΈκΈ°',
            image: 'π',
            stock: 5,
            price: 10000,
            isPrime: true,
          },
          {
            id: 3,
            name: 'λ©λ‘ ',
            image: 'π',
            stock: 5,
            price: 20000,
            isPrime: true,
          },
          {
            id: 4,
            name: 'νμΈμ ν',
            image: 'π',
            stock: 10,
            price: 5000,
            isPrime: true,
          },
          {
            id: 5,
            name: 'λ³΅μ­μ',
            image: 'π',
            stock: 10,
            price: 8000,
            isPrime: false,
          },
          {
            id: 6,
            name: 'ν¬λ',
            image: 'π',
            stock: 5,
            price: 6000,
            isPrime: false,
          },
          {
            id: 7,
            name: 'μλ°',
            image: 'π',
            stock: 2,
            price: 22000,
            isPrime: false,
          },
          {
            id: 8,
            name: 'μ¬κ³Ό',
            image: 'π',
            stock: 12,
            price: 4000,
            isPrime: false,
          },
          {
            id: 9,
            name: 'ν λ§ν ',
            image: 'π',
            stock: 4,
            price: 2000,
            isPrime: false,
          },
          {
            id: 10,
            name: 'λ λͺ¬',
            image: 'π',
            stock: 8,
            price: 10000,
            isPrime: false,
          },
          {
            id: 11,
            name: 'μ²΄λ¦¬',
            image: 'π',
            stock: 4,
            price: 25000,
            isPrime: true,
          },
          {
            id: 12,
            name: 'μ€λ μ§',
            image: 'π',
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
