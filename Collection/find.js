const _ = require('lodash');

// _.find(collection, [predicate=_.identity], [fromIndex=0])
// 遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： (value, index|key, collection)
// 返回匹配元素，否则返回 undefined

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

console.log(_.find(users, ['active', false])) // { user: 'fred', age: 40, active: false }