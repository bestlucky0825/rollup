define(['exports'], function (exports) { 'use strict';

	var self = {
		get p () { return p$$1; }
	};
	if (typeof Symbol !== 'undefined' && Symbol.toStringTag)
		Object.defineProperty(self, Symbol.toStringTag, { value: 'Module' });
	else
		Object.defineProperty(self, 'toString', { value: function () { return '[object Module]' } });
	Object.freeze(self);

	console.log(Object.keys(self));

	var p$$1 = 5;

	exports.p = p$$1;

	Object.defineProperty(exports, '__esModule', { value: true });

});
