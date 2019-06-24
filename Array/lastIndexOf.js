const _ = require('lodash');

// _.lastIndexOf(array, value, [fromIndex=array.length-1])
//这个方法类似 _.indexOf ，区别是它是从右到左遍历array的元素

console.log(_.lastIndexOf(['he','llo','wor','ld'],'llo')) //1