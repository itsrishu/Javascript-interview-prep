const myPromiseDotAnyPolyfill = (promiseArray) => {
	// takes in an array of promises
	// returns a promise
	// the promise resolves with the result of any of the passed promise
	// or
	// if all of the promises are rejected then the returned promise is rejected with the array of all input promises reasons.
	// Doesn't keep order of the input promise array

	let errorsArray = []
	let failedPromise = 0

	return new Promise((resolve, reject) => {
		promiseArray.forEach((promise, index) => {
			promise
				.then((value) => {
					//if any of the promise resolves then call resolve with the value
					resolve(value)
				})
				.catch((error) => {
					errorsArray[index] = error
					failedPromise += 1
					if (failedPromise === promiseArray.length) {
						reject(errorsArray)
					}
				})
		})
	})
}

// Input

const asyncTask1 = (text) => {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			reject(text + 'is rejected')
		}, 500)
	})
}

const asyncTask2 = (text) => {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(text + 'is fulfilled')
		}, 700)
	})
}
const asyncTask3 = (text) => {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			reject(text + 'is rejected')
		}, 200)
	})
}

const promiseArray = [asyncTask1('task1'), asyncTask2('task2'), asyncTask3('task3')]

myPromiseDotAnyPolyfill(promiseArray)
	.then((results) => {
		console.log('got results', results)
	})
	.catch((err) => {
		console.log(err)
	})
