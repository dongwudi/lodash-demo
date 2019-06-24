const _ = require('lodash');

// _.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])
// 这个方法类似 _.find ，不同之处在于， _.findLast是从右至左遍历collection （集合）元素的
// 返回匹配元素，否则返回 undefined

let arr = [1, 2, 3, 4];

console.log(_.findLast(arr, (n) => n % 2 == 1)) // 3