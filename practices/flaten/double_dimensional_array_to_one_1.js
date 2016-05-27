'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr = [];
  for(let i = 0; i < collection.length; i++)
  {
  	var arr = arr.concat(collection[i]);
  }
  return arr;
}

module.exports = double_to_one;
