const _ = require('lodash');

// _.includes(collection, value, [fromIndex=0])
// 检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串，那么检查 value（值，子字符串） 是否在字符串中， 否则使用 SameValueZero 做等值比较。 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索

console.log(_.includes([1, 2, 3], 1))  // true
console.log(_.includes([1, 2, 3], 1, 2)) // false 
console.log(_.includes({ 'user': 'fred', 'age': 40 }, 'user')) // false
console.log(_.includes({ 'user': 'fred', 'age': 40 }, 'fred')) // true
console.log(_.includes('pebbles', 'eb')) // true