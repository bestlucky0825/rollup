const assert = require( 'assert' );

module.exports = {
	description: 'allows a namespace to be assigned to a variable',
	warnings: warnings => {
		assert.deepEqual( warnings, [
			'Generated an empty bundle'
		]);
	}
};
