const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const generateTemplate = () => {
	return ("\
		<html>\
			<head>\
				<meta charset='utf-8'>\
    		<meta name='viewport' content='width=device-width, initial-scale=1' />\
			</head>\
			<body>\
				<div id='root'></div>\
			</body>\
		</html>\
	");
}

const config = {
	entry : './src/index.js',
	devtool : 'source-map',
	devServer : {
		contentBase : path.join(__dirname, 'build'),
		compress : true,
		port : 3001
	},
	output : {
		path : path.resolve(__dirname, 'build'),
		filename : 'static/main.js',
	},
	plugins : [
		new MiniCssExtractPlugin({ 
			filename : 'static/main.css' 
		}), 
		new HtmlWebpackPlugin({
			templateContent : generateTemplate,
			title : 'React App',
			minify : false
		})
	],
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