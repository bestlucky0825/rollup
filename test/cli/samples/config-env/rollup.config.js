var replace = require( 'rollup-plugin-replace' );

module.exports = {
	input: 'main.js',
	output: {
		format: 'cjs'
	},
	plugins: [
		replace( {
			__ENVIRONMENT__: process.env.PRODUCTION ? 'production' : 'development',
			__FOO__: process.env.FOO
		} )
	]
};
