const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        /*path: path.join(__dirname, 'public', 'build'),*/
        path: path.resolve(__dirname, 'public', 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    watch: isDevelopment,
    devtool: isDevelopment && 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=__[name]__[local]___[hash:base64:5]',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins() {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
              {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [
                  {
                    loader: "file-loader",
                    options: {
                      outputPath: ""
                    }
                  }
                ]
              }

            // {
            //     test: /\.json$/,
            //     exclude: /node_modules/,
            //     use: ['json-loader']
            // },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        })
    ]
    // ,
    // devServer: {
    //     historyApiFallback: true
    // }
    ,
    resolve: {
        extensions: ['.css','.scss', '.json', '.js', '.jsx'],
    }
    ,
    devServer: {
        historyApiFallback: true,
        proxy:{
            '/api': 'http://localhost:5000'
        }
    }
};
