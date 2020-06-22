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
    }
  }