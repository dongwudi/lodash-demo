const _ = require('lodash');

//_.pull(array, [values])
//移除数组array中所有和给定值相等的元素

let array = ['a', 'b', 'c', 'd', 'c' ,'b'];

console.log(_.pull(array, 'b', 'c')) // [ 'a', 'd' ]