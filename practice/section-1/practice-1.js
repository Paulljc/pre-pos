"use strict";

function collectSameElements(collectionA, collectionB) {
  var result = [];
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB.length; j++) {
      if (collectionB[j] === collectionA[i]) {
        result.push(collectionA[i]);
      }
    }
  }
  return result;
}
