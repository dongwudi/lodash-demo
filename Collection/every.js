const _ = require('lodash');

// _.every(collection, [predicate=_.identity])
// 通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。一旦 predicate（断言函数） 返回假值，迭代就马上停止。predicate（断言函数）调用三个参数： (value, index|key, collection)
// 如果所有元素经 predicate（断言函数） 检查后都都返回真值，那么就返回true，否则返回 false

var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];

console.log(_.every(users, ['active', false])) // true