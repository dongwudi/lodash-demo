const _ = require('lodash');

// _.map(collection, [iteratee=_.identity])
// 创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数： (value, index|key, collection)

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

console.log(_.map(users, 'user')) //[ 'barney', 'fred' ]

_.map({ 'a': 4, 'b': 8 }, (v) => {
  console.log(v)
})