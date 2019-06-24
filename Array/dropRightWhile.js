const _ = require('lodash');

let users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false },
  { 'user': 'kfc', 'active': true }
];
// _.dropRightWhile(array, [predicate=_.identity]) (从右至左)
let return_arr = _.dropRightWhile(users, function(o) { return !o.active; }); // 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)

console.log(return_arr); 
// [ { user: 'barney', active: true },
// { user: 'fred', active: false },
// { user: 'pebbles', active: false },
// { user: 'kfc', active: true } ]
