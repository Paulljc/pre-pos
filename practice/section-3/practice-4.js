'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = [];
  for (var i = 0; i < collectionA.length; i++) {
    if (result.length == 0) {
      result.push({
        key: collectionA[i],
        count: 1
      });
    } else {
      if (result[result.length-1].key === collectionA[i]) {
        result[result.length-1].count++;
      }else if(collectionA[i].split("").length > 1) {
        var newarr = collectionA[i].split("-")
        var obj = {
          key: newarr[0],
          count: Number(newarr[newarr.length-1])
        };
        result.push(obj);
      }else {
        var obj = {
          key: collectionA[i],
          count: 1
        };
        result.push(obj);
      }
    }
  }

  for(var i = 0; i < result.length; i++){
    for(var j = 0; j < objectB.value.length; j++){
      if(result[i].key === objectB.value[j]){
        var num = Math.floor(result[i].count / 3);
        result[i].count -= num;
      }
    }
  }
  return result;
}
