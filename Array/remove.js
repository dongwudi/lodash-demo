const _ = require('lodash');

// _.remove(array, [predicate=_.identity])
// 移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。predicate（断言） 会传入3个参数： (value, index, array)。 
// 这个方法会改变数组

let array = [1, 2, 3, 4];
let evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log(array); //[ 1, 3 ]

console.log(evens); //[ 2, 4 ]