const path = require("path");
const webpack = require('webpack');
var dotenv = require('dotenv').config({path: __dirname + '.env'});

module.exports = {
    entry: './src/index.tsx',
    output: {
      path: __dirname + '/public',
      filename: 'build/app.js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
        test: /\.css$/i,
        use: ['style-loader', 
        'css-loader'],
                  },
      ]
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3001,
        proxy: {
            '/api': {
                target: 'https://localhost:5000',
                secure: false
            }
        }
    },
    // plugins: [
    //   new webpack.DefinePlugin( {
    //     "process.env": dotenv.parsed
    //   } ),
    // ]
  }