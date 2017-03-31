(function () {

  var global = this || window;
  var nx = global.nx || require('next-js-core2');
  var document = global.document;
  var addEventListener = (function () {
    if (document.addEventListener) {
      return function (inElement, inName, inCallback, inCapture) {
        inElement.addEventListener(inName, inCallback, inCapture || false);
      }
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
      }
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

  var DomEvent = nx.declare('nx.dom.Event', {
    statics: {
      on: function () {
        var args = nx.toArray(arguments);
        addEventListener.apply(null,args);
        return {
          destroy:function(){
            return removeEventListener.apply(null,args);
          }
        }
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = on;
  }

}());
