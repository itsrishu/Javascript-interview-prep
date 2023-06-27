/*
Compose(f1, f2 ,…fn)(value)

Const addone = n => n+1 
Const square = n = n*n

Write that compose function which takes these 2 functions and 5 as value and returns the output

*/

const compose =
  (...args) =>
  (value) => {
    return args.reduceRight((previousResult, fn) => {
      if (typeof fn !== "function") {
        console.log(`Skipping non-function argument: ${fn}`);
        return previousResult;
      }

      const nextResult = fn(previousResult);
      if (typeof nextResult === "undefined") {
        console.log(`Function '${fn.name}' did not return a value.`);
        return previousResult;
      }

      return nextResult;
    }, value);
  };

const addOne = (n) => n + 1;
const square = (n) => {
  console.log("I don't return any value"); // Simulating a function that does not return a value
};

const invalidFn = "not a function";

const composedFn = compose(invalidFn, square, addOne, 5, addOne);
const result = composedFn(5);
console.log(result);
