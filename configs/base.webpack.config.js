//var webpack = require('webpack');
//var path = require('path');
 
config = {
    devtool: 'eval',
    // entry: [
    //     './src/base.tsx'
    // ],
    // output: {
    //     filename: 'home.js',
    //     path: path.resolve('dist/views/')
    // },
    watch: true,
    resolve: {
        // Look for modules in .ts(x) files first, then .js(x)
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // Add 'src' to our modulesDirectories, as all our app code will live in there, so Webpack should look in there for modules
        modules: ['src', 'node_modules'],
    },
    module: {
        loaders: [
        // .ts(x) files should first pass through the Typescript loader, and then through babel
        { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'] }
        ]
    },
    plugins: [ ]
};