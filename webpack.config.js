var path = require('path');
var cwd = __dirname;

module.exports = {  
  entry: './ts/main.ts',

  output: {
    path: "./js",
    filename: 'main.js'
  },

  resolve: {
    root: [path.resolve(cwd)],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    modulesDirectories: [
        'node_modules', '.'
      ],
  },
  
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}