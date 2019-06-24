const _ = require('lodash');

//_.filter(collection, [predicate=_.identity])
// 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)
//  返回一个新的过滤后的数组

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

console.log(_.filter(users, ['active', false])) // [ { user: 'fred', age: 40, active: false } ]