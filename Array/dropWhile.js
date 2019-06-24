const _ = require('lodash');

let users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true },
  { 'user': 'kfc', 'active': false }
];
// _.dropWhile(array, [predicate=_.identity])
let return_arr = _.dropWhile(users, function(o) { return !o.active; }); // 创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)

console.log(return_arr); 
// [ { user: 'pebbles', active: true },
//   { user: 'kfc', active: false } ]

