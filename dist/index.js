/*!
 * name: @jswork/next-dom-event
 * description: Dom event api based on next toolkit.
 * homepage: https://github.com/afeiship/next-dom-event
 * version: 1.0.0
 * date: 2020-11-20 20:15:58
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var document = global.document;
  var FUNCTION = 'function';

  var addEventListener = (function () {
    if (document.addEventListener) {
      return function (inElement, inName, inCallback, inCapture) {
        inElement.addEventListener(inName, inCallback, inCapture || false);
      };
    } else if (document.attachEvent) {
      return function (inElement, inName, inCallback) {
        var name = 'on' + inName;
        inElement.attachEvent(name, function (e) {
          e = e || global.event;
          e.target = e.target || e.srcElement;
          e.currentTarget = node;
          inCallback.call(node, e);
        });
      };
    }
  })();

  var removeEventListener = (function () {
    if (document.removeEventListener) {
      return function (inElement, inName, inCallback, inCapture) {
        inElement.removeEventListener(inName, inCallback, inCapture || false);
      };
    } else if (document.detachEvent) {
      return function (inElement, inName, inCallback) {
        var name = 'on' + inName;
        inElement.detachEvent(name, function (e) {
          e = e || global.event;
          e.target = e.target || e.srcElement;
          e.currentTarget = node;
          inCallback.call(node, e);
        });
      };
    }
  })();

  var NxDomEvent = nx.declare('nx.DomEvent', {
    statics: {
      on: function () {
        var target = arguments[0];
        var onFn = target.on;
        if (typeof onFn === FUNCTION) {
          return onFn.call.apply(onFn, arguments);
        } else {
          var args = nx.slice(arguments);
          var context = args[0];
          addEventListener.apply(context, args);
          return {
            destroy: function () {
              return removeEventListener.apply(context, args);
            }
          };
        }
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomEvent;
  }
})();
