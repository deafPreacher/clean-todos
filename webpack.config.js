const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	entry : './src/index.js',
	devtool : 'source-map',
	devServer : {
		contentBase : path.join(__dirname, 'build'),
		compress : true,
		port : 3001
	},
	output : {
		path : path.resolve(__dirname, 'build/static'),
		filename : 'main.js'
	},
	plugins : [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude : '/(node_modules)/',
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react', '@babel/preset-env'],
				},
			},
			{
			 	test: /\.css$/,
	      use: [
	       
	        // { loader: 'style-loader' },
	        { loader : MiniCssExtractPlugin.loader },
	        {
	          loader: 'css-loader',
	          options: {
	            // modules: true
	          }
	        }
	      ]
			}
		],
	}
}

module.exports = config;