const _ = require('lodash');

// _.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])
let users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

console.log(_.findLastIndex(users, function(o) { return o.user == 'pebbles'; })); //这个方式类似 _.findIndex， 区别是它是从右到左的迭代集合array中的元素。

//2