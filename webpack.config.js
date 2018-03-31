const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
    filename: 'style-[contenthash:10].css'
});

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader', 
                    options: { presets: ['es2015']}
                }],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: extractPlugin.extract({
                    use: 'css-loader'
                }),
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2|webm|mp4)$/,
                use: [
                    {
                        loader: 'file-loader?[limit=10000]',
                        options: {
                            name: '[name][hash:12].[ext]',
                            outputPath: 'assets/img/'
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
		contentBase: path.join(__dirname, "docs"),
        compress: true,
		stats: {
			colors: true,
			chunks: false,
			assets: false,
			timings: false,
			modules: false,
			hash: false,
			version: false
		},
		port: 4200
	},
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}