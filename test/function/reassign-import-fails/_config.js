var path = require( 'path' );
var assert = require( 'assert' );

module.exports = {
	description: 'disallows assignments to imported bindings',
	error: function ( err ) {
		assert.ok( /Illegal reassignment/.test( err.message ) );
		assert.equal( path.normalize(err.file), path.resolve( __dirname, 'main.js' ) );
		assert.deepEqual( err.loc, { line: 8, column: 0 });
	}
};

// test copied from https://github.com/esnext/es6-module-transpiler/tree/master/test/examples/reassign-import-fails
