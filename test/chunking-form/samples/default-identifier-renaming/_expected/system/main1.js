System.register(['./chunk1.js'], function (exports, module) {
	'use strict';
	var d;
	return {
		setters: [function (module) {
			d = module.default;
		}],
		execute: function () {

			var main1 = exports('default', d.map(d => d + 1));

		}
	};
});
