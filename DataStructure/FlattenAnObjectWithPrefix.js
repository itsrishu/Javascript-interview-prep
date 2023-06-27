/* 
Given an nested object obj which can have any type of value, deep flatten it and return the new object in Javascript.

Note: While flattening use the array's index as key.

Input:
{
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
       L: 56
    },
    Q: [1, 2]
   }   
}

Output:
{
  "A": "12"
  "B": 23,
  "C.O.L": 56,
  "C.P": 23,
  "C.Q.0": 1,
  "C.Q.1": 2,
}

*/

// A=1&B=”hello”&C.D=true&C.E=3&C.F.G=1&C.F.H=2&I=[1,2,3]

function flattenObject(obj, prefix = "") {
  let flattenedObj = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let prefixedKey = prefix ? `${prefix}.${key}` : key;

      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        let nestedObj = flattenObject(obj[key], prefixedKey);
        flattenedObj = { ...flattenedObj, ...nestedObj };
      } else if (Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
          let arrayKey = `${prefixedKey}.${i}`;
          flattenedObj[arrayKey] = obj[key][i];
        }
      } else {
        flattenedObj[prefixedKey] = obj[key];
      }
    }
  }

  return flattenedObj;
}

console.log(
  flattenObject({
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
        L: 56,
      },
      Q: [1, 2],
    },
  })
);
