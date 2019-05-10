# next-dom-event
> Dom event api based on next toolkit.

## use webpack:
```js
//import package:
const NxDomEvent = require('next-dom-event');

//create resurces:
const res1 = NxDomEvent.on(el,'click',callback,capture);
const res2 = NxDomEvent.timeout(callback,100);
const res3 = NxDomEvent.interval(callback,100);

//destroy resource:
res1.destory();
res2.destory();
res3.destory();
```

## usage:
```html
  <h3>Everything is resources!</h3>
  <hr>
  <button id="btn1">Button1</button>
  <button id="btn2">Button2</button>
  <button id="btn3" style="background: #3eb233">Unbind btn1 events</button>

  <script src="../node_modules/next-js-core2/dist/next-js-core2.js"></script>
  <script src="../dist/next-dom-event.js"></script>
  <script>
    var btn1 = document.querySelector('#btn1');
    var btn2 = document.querySelector('#btn2');
    var btn3 = document.querySelector('#btn3');
    var btn4 = document.querySelector('#btn4');
    var btn4_1 = document.querySelector('#btn4_1');

    var nxEvent = nx.dom.Event;
    var res1 = nxEvent.on(btn1,'click',function(){
      console.log('click1');
    });

    var res2 = nxEvent.on(btn2,'click',function(){
      console.log('click2');
    });

    var res3 = nxEvent.on(btn3,'click',function(){
      res1.destroy();
    });

    var timerRes = nxEvent.interval(function(){
      console.log('trigger every 1s!')
    },1000);


    var res4_1 = nxEvent.on(btn4_1,'click',function(){
      console.log('cancel interval!');
      timerRes.destroy();
    });
  </script>
```
