define(['exports', './main1.js'], function (exports, __main1_js) { 'use strict';

  class C {
    fn (num) {
      console.log(num - __main1_js.p);
    }
  }

  var p = 43;

  new C().fn(p);

  exports.p = p;

  Object.defineProperty(exports, '__esModule', { value: true });

});
