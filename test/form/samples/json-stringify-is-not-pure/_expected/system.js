System.register('myBundle', [], function (exports, module) {
	'use strict';
	return {
		execute: function () {

			var main = exports('default', (input) => {
				try {
					JSON.stringify(input);
					return true;
				} catch (e) {
					return false;
				}
			});

		}
	};
});
