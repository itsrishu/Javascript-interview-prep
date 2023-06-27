function flattenAnArray(array) {
  let flattenArray = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      const result = flattenAnArray(item);
      flattenArray = flattenArray.concat(result);
    } else {
      flattenArray.push(item);
    }
  });
  return flattenArray;
}

const nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, 9, [10]]];

console.log(flattenAnArray(nestedArray));
