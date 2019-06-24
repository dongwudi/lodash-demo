const _ = require('lodash');

let array = [1, 2, 3];
// _.fill(array, value, [start=0], [end=array.length]) 这个方法会改变 array（不是创建新数组）
_.fill(array, 'a'); //使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
console.log(array); //[ 'a', 'a', 'a' ]

console.log(_.fill([4, 6, 8, 10], '*', 1, 3)); //[ 4, '*', '*', 10 ]