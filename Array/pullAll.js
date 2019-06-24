const _ = require('lodash');

// _.pullAll(array, values)
// 类似 _.pull，区别是这个方法接收一个要移除值的数组
// 这个方法会改变数组

let array = ['a', 'b', 'c', 'd', 'c' ,'b'];

console.log(_.pullAll(array, ['b', 'c'])) // [ 'a', 'd' ]
console.log(array) // [ 'a', 'd' ]