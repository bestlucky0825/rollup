System.register(['./chunk1.js'], function (exports, module) {
	'use strict';
	return {
		setters: [function (module) {
			exports('ItemOne', module.ItemOne);
		}],
		execute: function () {



		}
	};
});
