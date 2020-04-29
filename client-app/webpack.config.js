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
        { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3001,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                // TODO https/auth0 integration?
                secure: false
            }
        }
    }
  }