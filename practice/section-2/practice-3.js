"use strict";

function countSameElements(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    var strlen = collection[i].split("");
    if (result.length == 0) {
      result.push({
        name: collection[i],
        summary: 1
      });
    } else {
      if (result[result.length - 1].name === collection[i]) {
        result[result.length - 1].summary++;
      } else if (strlen.length > 1) {
          if(strlen[1] == '-' || strlen[1] == ':'){
            if(strlen[0] === collection[i-1]){
              result[result.length-1].summary += Number(strlen[strlen.length-1]);
            }else{
              var obj = {
                name: strlen[0],
                summary: Number(strlen[strlen.length - 1])
              };
              result.push(obj);
            }
          }else{
            if(strlen.length>4){
              result[result.length-1].summary += Number(strlen[2]*10) + Number(strlen[strlen.length-2]);
            }else{
              result[result.length-1].summary += Number(strlen[strlen.length-2])
            }
          }
      } else {
        var obj = {
          name: collection[i],
          summary: 1
        };
        result.push(obj);
      }
    }
  }
  return result;
}
