module.exports = {
	entry: './ts/index.ts',
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		loaders: [
			{ test: /.ts$/, loader: 'ts-loader' }
		]
	},
	watch: true,
	devtool : "source-map"
};
