const input = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

function deepFlattenAnObject(obj, prefix = "") {
  let result = {};

  for (let key in obj) {
    const val = obj[key];
    if (typeof val === "object" && val !== null) {
      const nested = deepFlattenAnObject(val, prefix + key + ".");
      result = { ...result, ...nested };
    } else {
      result[key] = val;
    }
  }
  return result;
}

console.log(
  deepFlattenAnObject({
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
