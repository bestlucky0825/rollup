(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(function() {
		var current = global.FooBar;
		var exports = (global.FooBar = {});
		factory(exports);
		global.FooBar = exports;
		exports.noConflict = function() { global.FooBar = current; return exports; };
	})();
}(this, (function (exports) { 'use strict';

	function doThings() {
		console.log( 'doing things...' );
	}

	const number = 42;

	var setting = 'no';

	exports.doThings = doThings;
	exports.number = number;
	exports.setting = setting;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
