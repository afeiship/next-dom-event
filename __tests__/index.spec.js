(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxDomEvent = require('../src/next-dom-event');

  describe('NxDomEvent.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
