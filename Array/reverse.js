const _ = require('lodash');

// _.reverse(array)
// 反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。 
// 这个方法会改变数组

let array = [1, 2, 3, 4];


console.log(_.reverse(array)); //[ 4, 3, 2, 1 ]

console.log(array); //[ 4, 3, 2, 1 ]