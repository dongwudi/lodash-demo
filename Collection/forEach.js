const _ = require('lodash');

// _.forEach(collection, [iteratee=_.identity])
// 调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出
// 注意: 与其他"集合"方法一样，类似于数组，对象的 "length" 属性也会被遍历。想避免这种情况，可以用 _.forIn 或者 _.forOwn 代替

_.forEach([1, 2],function(value) {
  console.log(value); // 1 2 
});

_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key); // a b
});