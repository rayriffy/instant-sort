Instant Sort
============

The fastest sorting algorithm ever with the speed of **O(1)**

[![npm](https://img.shields.io/npm/v/instant-sort.svg)](http://npm.im/instant-sort)
[![npm bundle size](https://img.shields.io/bundlephobia/min/instant-sort)](https://bundlephobia.com/result?p=instant-sort)

Installation
------------

```
npm install instant-sort
```

Examples
--------

```javascript
const { sort } = require('instant-sort')
 
function isSorted(arr) {
  originalArr = arr.toString() 
  arr.sort(function(a,b){
    return a - b; 
  })

  return arr.toString() === originalArr;
}
 
const unsortedArray = [4, 1, 5, 2, 6, 9]
 
console.log(isSorted(unsortedArray)) // false
console.log(isSorted(sort(unsortedArray))) // true
```

TypeScript
----------

Yes, this module is TypeScript-friendly! No need for DefinitelyTyped

```jsx
const res = sort<Omit<IAnime, 'genres'>>([
  {
    name : {
      romaji: 'Toaru Kagaku no Railgun T',
      english: 'A Certain Scientific Railgun T',
      native: 'とある科学の超電磁砲T',
    },
  },
  {
    name : {
      romaji: 'Itai no wa Iya nanode Bougyo-Ryoku ni Kyokufuri Shitai to Omoimasu',
      english: `BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense.`,
      native: '痛いのは嫌なので防御力に極振りしたいと思います。'
    },
  },
])

console.log(res) // Should return sorted array
```

Contributing
------------

We welcome all contributions by sending PR to this repository.

Need Help ?
-----------

If you need help with anything, here're following methods:

#### Create an Issue

If you have something you want to discuss in detail, or have hit an issue which you believe others will also have in deployment or development of the system, [opening an issue](https://github.com/rayriffy/instant-sort/issues) is the best way to get help. It creates a permanent resource for others wishing to contribute to conversation.

Donations
---------

If you like my project, please supporting me by [buying some coffee](https://www.buymeacoffee.com/rayriffy)
