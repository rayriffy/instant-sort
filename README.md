Instant Sort
============

The fastest sorting algorithm ever with the speed of **O(1)**

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
  return arr.reduce((p, v) => p && p <= v, true)
}

const unsortedArray = [4, 1, 5, 2, 6, 9]

console.log(isSorted(unsortedArray)) // false
console.log(isSorted(sort(unsortedArray))) // true
```

TypeScript
----------

Yes, this module is TypeScript-friendly! No need for DefinitelyTyped

Contributing
------------

We welcome all contributions by sending PR to this repository.

Need Help ?
-----------

If you need help with anything, here're following methods:

#### Create an Issue

If you have something you want to discuss in detail, or have hit an issue which you believe others will also have in deployment or development of the system, [opening an issue](https://github.com/rayriffy/rayriffy-h/issues) is the best way to get help. It creates a permanent resource for others wishing to contribute to conversation.

Donations
---------

If you like my project, please supporting my by [buying some coffee](https://www.buymeacoffee.com/rayriffy)