const _ = require('lodash');

// _.countBy(collection, [iteratee=_.identity])
// 创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（迭代次数）。 iteratee 调用一个参数：(value)

console.log(_.countBy([6.1, 4.2, 6.3], Math.floor)) // { '4': 1, '6': 2 }

console.log(_.countBy(['one', 'two', 'three'], 'length')) // { '3': 2, '5': 1 }