System.register(['./generated-chunk.js'], function (exports, module) {
  'use strict';
  var fn, text;
  return {
    setters: [function (module) {
      fn = module.f;
      text = module.t;
    }],
    execute: function () {

      class Main1 {
        constructor () {
          fn();
          console.log(text);
        }
      } exports('default', Main1);

    }
  };
});
