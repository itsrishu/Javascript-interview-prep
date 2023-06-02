// takes in an array of promises
// returns a promise
// the promise resolves with the result of all passed promise
// or
// reject with the error message of first rejected promise
// Results are returned in the same order as the promises in a given array
//The returned promise reolves with an array of the fulfillment values.

const myPromiseDotAllPolyfill = (promiseArray) => {
	let results = []
	let completedPromise = 0

	return new Promise((resolve, reject) => {
		promiseArray.forEach((promise, index) => {
			promise
				.then((value) => {
					results[index] = value
					completedPromise += 1
					if (promiseArray.length === completedPromise) {
						resolve(results)
					}
				})
				//if any promise fails then reject
				.catch((error) => {
					reject(error)
				})
		})
	})
}

// Input

const asyncTask = (time) => {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(time)
		}, time)
	})
}

const promiseArray = [asyncTask(1000), asyncTask(5000), asyncTask(3000)]

myPromiseDotAllPolyfill(promiseArray)
	.then((results) => {
		console.log('got results', results)
	})
	.catch(console.error)
