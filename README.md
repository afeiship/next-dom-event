# next-dom-event
> Dom event api based on next toolkit.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-dom-event
```

## apis
| api | params | description          |
| --- | ------ | -------------------- |
| on  | -      | register a new event |

## usage
```js
import NxDomEvent from '@feizheng/next-dom-event';

//create resources:
const el = document.getElement('test1');
const res = NxDomEvent.on(el,'click',()=>{
  console.log('click!');
},capture);
res.destory();
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-dom-event/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-dom-event
[version-url]: https://npmjs.org/package/@jswork/next-dom-event

[license-image]: https://img.shields.io/npm/l/@jswork/next-dom-event
[license-url]: https://github.com/afeiship/next-dom-event/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-dom-event
[size-url]: https://github.com/afeiship/next-dom-event/blob/master/dist/next-dom-event.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-dom-event
[download-url]: https://www.npmjs.com/package/@jswork/next-dom-event
