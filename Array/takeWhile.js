const _ = require('lodash');

// _.takeWhile(array, [predicate=_.identity])
// 从array数组的起始元素开始提取元素，，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)

let users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

console.log(_.takeWhile(users, function(o) { return o.active; }))

// [ { user: 'barney', active: true } ]