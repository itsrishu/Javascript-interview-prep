// takes in an array of promises
// returns a promise
// the returned promise fulfills or rejects as soon as any of the promise in promiseArray fulfills or rejects
// or
// returned promise resolves with the value of the input promise of rejects with the reason of input promise
// evrn though there is a resolve but task3 gets rejected first so task3 is the ouptut

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
			resolve(text + 'is rejected')
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

const promiseArray = [
	asyncTask1('task1'),
	asyncTask2('task2'),
	asyncTask3('task3'),
]

/** Polyfill */

function myPromiseDotRace(promiseArray) {
	return new Promise((resolve, reject) => {
		promiseArray.forEach((promise, index) => {
			Promise.resolve(promise)
				.then((res) => resolve(res))
				.catch((err) => reject(err))
		})
	})
}

myPromiseDotRace(promiseArray)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
