module.exports = {
    entry: __dirname + "/public/js/index.js",
    output : {
        path: __dirname + "/public/build",
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }
        ]
    }
}