# netux

> Martín "Netux" Rodriguez

## usage

As a `postinstall` script.

```bash
npm install netux
# => {"name":{"first":"Martín","last":"Rodriguez"},...}
```

As a JSON object.

```js
console.log(require('netux')); // => {"name":{"first":"Martín","last":"Rodriguez"},...}
```

With TypeScript support.

```ts
import * as netux from 'netux';

const personName = netux.name; // of type { first: string; last: string }
console.log(`${ personName.first } ${ personName.last }`); // => "Martín Rodriguez"

```

## credits

[@johnkpaul](https://github.com/johnkpaul/johnkpaul), [@bevacqua](https://github.com/bevacqua/bevacqua) and [@joshhunt](https://github.com/bevacqua/bevacqua)

## license

MIT
