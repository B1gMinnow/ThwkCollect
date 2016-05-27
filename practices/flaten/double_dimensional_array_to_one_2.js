'use strict';

function double_to_one(collection) {
	var arr = [];
  	for(let i = 0; i < collection.length; i++)
  	{
  		var arr = arr.concat(collection[i]);
  	}


  	var count = 0;
  	var len = arr.length;
  	for(let i = 0; i < len; i++)
  	{
  		for(let j = 0; j < i-count; j++)
  		{
  			if(arr[i - count] === arr[j])
  			{

  				arr.splice(i-count,1);
  				count++;
  				
  			}
  				

  		}
  	}
  	return arr;
  //在这里写入代码
}

module.exports = double_to_one;
