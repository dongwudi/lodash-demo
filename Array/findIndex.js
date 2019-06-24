const _ = require('lodash');

// _.findIndex(array, [predicate=_.identity], [fromIndex=0])
let users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

console.log(_.findIndex(users, function(o) { return o.user == 'pebbles'; })); //该方法类似 _.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。找不到就返回 -1

//2