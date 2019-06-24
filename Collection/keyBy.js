const _ = require('lodash');

// _.keyBy(collection, [iteratee=_.identity])
// 创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。 每个 key（键）对应的值是生成key（键）的最后一个元素。iteratee（迭代函数）调用1个参数：(value)

var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 },
  { 'dir': 'right_last', 'code': 100 }
];

console.log(_.keyBy(array, function(o) {
  return String.fromCharCode(o.code);
}))

// { a: { dir: 'left', code: 97 },
//   d: { dir: 'right_last', code: 100 } }