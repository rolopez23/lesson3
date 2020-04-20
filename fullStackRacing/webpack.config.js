const path = require('path');
const ENTRY_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist')

module.exports = {
  entry: `${ENTRY_DIR}/index.jsx`,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        use: {
          loader: 'babel-loader',
          
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: DIST_DIR
  }
};