const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'   //la carpeta donde estan los archivos a entregar al cliente
                                //porque en js esta todo lo del desarrollo
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,  //regexp para validar que los archivos terminen en .js
                exclude: /node_modules/,    //excluye todo lo que se encuentra en determinada carpeta
                        //si no se configura el exclude, babel le aplicaría también a cada archivo js de node_modules
                use: {
                    loader: 'babel-loader'  //el que se instalo que esta en package.json
                }
            }
        ]
    }
};