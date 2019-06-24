const _ = require('lodash');

// _.partition(collection, [predicate=_.identity])
// 创建一个分成两组的元素数组，第一组包含predicate（断言函数）返回为 truthy（真值）的元素，第二组包含predicate（断言函数）返回为 falsey（假值）的元素。predicate 调用1个参数：(value)

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

console.log(_.partition(users, (v) => {
  return v.age > 38
}))

// [ [ { user: 'fred', age: 48 }, { user: 'fred', age: 40 } ],
//   [ { user: 'barney', age: 34 }, { user: 'barney', age: 36 } ] ]