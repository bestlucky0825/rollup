(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

	var { x: b = globalFunction() } = {};

	var d;
	({ x: d = globalFunction() } = {});

	var [ f = globalFunction() ] = [];

	var h;
	[ h = globalFunction() ] = [];

})));
