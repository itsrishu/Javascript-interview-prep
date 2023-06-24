/*Find missing number from an array*/

function findMissingNUmber(array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  const missingNumbers = [];
  let presence = {};
  for (let i = 0; i <= array.length; i++) {
    presence[array[i]] = true;
  }

  for (let i = min; i <= max; i++) {
    if (!presence[i]) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}

console.log(findMissingNUmber([34, 40]));
