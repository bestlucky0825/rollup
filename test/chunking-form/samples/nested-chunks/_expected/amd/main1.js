define(['require', './generated-dep'], function (require, dep) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				}
			});
		}
		n['default'] = e;
		return Object.freeze(n);
	}

	console.log('main1', dep.value);

	new Promise(function (resolve, reject) { require(['./generated-dynamic'], resolve, reject) }).then(result => console.log(result));
	new Promise(function (resolve, reject) { require(['./external'], function (m) { resolve(/*#__PURE__*/_interopNamespace(m)); }, reject) }).then(result => console.log(result));

});
