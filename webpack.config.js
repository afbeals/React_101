var path = require("path");
var webpack = require("webpack");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
	filename: "basic.css"
});

var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/dist"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: SRC_DIR,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["react","es2015","stage-2"]
						}	
					}
					
				]
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: [
						"css-loader",
						"sass-loader"

					]
				})
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			//....
		}),
		extractPlugin
	]
};

module.exports = config;
