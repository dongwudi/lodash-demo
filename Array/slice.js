const _ = require('lodash');

// _.slice(array, [start=0], [end=array.length])
// 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。 

let array = [1, 2, 3, 4];


console.log(_.slice(array, 1, 3)); // [ 2, 3 ]
