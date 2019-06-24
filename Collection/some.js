const _ = require('lodash');

// _.some(collection, [predicate=_.identity])
// 通过 predicate（断言函数） 检查collection（集合）中的元素是否存在 任意 truthy（真值）的元素，一旦 predicate（断言函数） 返回 truthy（真值），遍历就停止。 predicate 调用3个参数：(value, index|key, collection)

console.log(_.some([null, 0, 'yes', false], Boolean)) // true
