// takes in an array of promises
// returns a promise
// the promise resolves with the result of all passed promise
// or
// reject with the error message of first rejected promise
// Results are returned in the same order as the promises in a given array
//The returned promise reolves with an array of the fulfillment values.

const asyncTasks = (time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(time)
		}, time)
	})
}

const promises = [asyncTasks(1000), asyncTasks(2000), asyncTasks(3000)]

// Promise.all(promises).then((results) => {
// 	console.log(results)
// })

/** PolyFill*/

function myPromiseDotAll(promiseArray) {
	let arr = []
	let completedPromise = 0
	return new Promise((resolve, reject) => {
		promiseArray.forEach((promise, index) => {
			promise
				.then((result) => {
					arr[index] = result
					completedPromise = completedPromise + 1
					if (completedPromise === promiseArray.length) {
						resolve(arr)
					}
				})
				.catch((error) => {
					reject(error)
				})
		})
	})
}

myPromiseDotAll(promises).then((results) => {
	console.log(results)
})
