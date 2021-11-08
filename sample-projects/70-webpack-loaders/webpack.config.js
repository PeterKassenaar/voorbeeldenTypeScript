// webpack.config.js
module.exports = {
	entry: './index.ts',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts']
	},
	module: {
		// previously: 'loaders'. Since webpack 4.x: 'rules'
		rules: [
			{test: /\.ts$/, use: 'ts-loader' }
		]
	},
	watch: true
};
