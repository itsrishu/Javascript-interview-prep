/*
    Given a N dimensional array of integers arr and depth, flatten this array till the specified depth and return the flattened array.
*/

//Input: arr = [1, 2, 3, [4, 5, [6, 7]]] , depth = 1

function flattenArrayWithDepth(arr, depth) {
  let flattened = [];

  arr.forEach((item) => {
    if (Array.isArray(item) && depth > 1) {
      flattened = flattened.concat(flattenArrayWithDepth(item, depth - 1));
    } else {
      flattened.push(item);
    }
  });

  return flattened;
}
const arr = [1, [2, [3, 4], 5], 6];
const depth = 2;

const result = flattenArrayWithDepth(arr, depth);
console.log(result);
