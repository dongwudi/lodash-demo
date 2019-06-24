const _ = require('lodash');

let arr = [1,2,3,4,5];
// _.chunk(array, [size=1]) 
let return_arr = _.chunk(arr, 2); // 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块

console.log(return_arr); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]