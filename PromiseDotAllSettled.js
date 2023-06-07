// takes in an array of promises
// returns a promise that fulfills after all promises have either been fulfilled or rejected
// with an array of objects that each describes the outcomes of each promise
// order is maintained as of Promise.all

const myPromiseDotAllSettledPolyfill = (promiseArray) => {
	const mappedPromise = promiseArray.map((promise) => {
		return Promise.resolve(promise)
			.then((response) => {
				return {
					status: 'FULFILLED',
					value: response,
				}
			})
			.catch((error) => {
				return {
					status: 'Rejected',
					reason: error,
				}
			})
	})
	return Promise.all(mappedPromise)
}

// Input

const asyncTask1 = (text) => {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			reject(new Error('an error'))
		}, 500)
	})
}

const asyncTask2 = (text) => {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			reject(new Error('an error'))
		}, 700)
	})
}
const asyncTask3 = (text) => {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(text + 'is fulfilled')
		}, 200)
	})
}

const promiseArray = [
	asyncTask1('task1'),
	asyncTask2('task2'),
	asyncTask3('task3'),
]

myPromiseDotAllSettledPolyfill(promiseArray)
	.then((results) => {
		console.log('got results', results)
	})
	.catch((err) => {
		console.log(err)
	})
