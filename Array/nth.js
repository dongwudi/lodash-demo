const _ = require('lodash');

//_.nth(array, [n=0])
//获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素

let array = ['a', 'b', 'c', 'd'];

console.log(_.nth(array, 2)) // c
console.log(_.nth(array, -2)) // c
console.log(_.nth(array, 9)) // undefined