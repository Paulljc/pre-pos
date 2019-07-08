"use strict";

function countSameElements(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    if (result.length == 0) {
      result.push({
        key: collection[i],
        count: 1
      });
    } else {
      if (result[result.length-1].key === collection[i]) {
        result[result.length-1].count++;
      } else {
        var obj = {
          key: collection[i],
          count: 1
        };
        result.push(obj);
      }
    }
  }
  return result;
}
