(function () {
  const NxDomEvent = require('../src');

  describe('NxDomEvent.methods', function () {
    test('exist: on function should exist', function () {
      expect(typeof NxDomEvent.on).toBe('function');
    });

    test('on: on a handler, can be trigger', () => {
      const handler = jest.fn();
      NxDomEvent.on(document, 'click', handler);
      document.dispatchEvent(new Event('click'));
      expect(handler).toHaveBeenCalled();
    });

    test('off: on a handler, when destroy execute, can not be trigger', () => {
      const handler = jest.fn();
      const res = NxDomEvent.on(document, 'click', handler);
      expect(typeof res.destroy).toBe('function');
      res.destroy();
      document.dispatchEvent(new Event('click'));
      expect(handler).not.toHaveBeenCalled();
    });
  });
})();
