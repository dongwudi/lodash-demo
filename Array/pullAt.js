const _ = require('lodash');

// _.pullAt(array, [indexes])
// 根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组
// 这个方法会改变数组

let array = [5, 10, 15, 20];
 
console.log(_.pullAt(array, 1, 2)); //[ 10, 15 ]
console.log(array) //[ 5, 20 ]