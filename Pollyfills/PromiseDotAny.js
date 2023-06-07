/** Takes in an array of promises and returns a promise.
 * The promise resolves with the result of any of the passed promise
 * or
 * if all of the promises are rejected then the returned promise is rejected with the array of all input promises reasons.
 * Doesn't keep order of the input promise array */

const asyncTasks = (time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// if (time === 3000) {
			// 	resolve(time)
			// } else {
			// 	reject(time)
			// }
			reject(time)
		}, time)
	})
}

const promises = [asyncTasks(1000), asyncTasks(2000), asyncTasks(3000)]

// Promise.any(promises)
// 	.then((result) => console.log(result, 'then'))
// 	.catch((err) => console.log(err, 'catch'))

/** PolyFill*/

function myPromiseDotAny(promiseArray) {
	let result = []
	let rejectedPromises = 0
	return new Promise((resolve, reject) => {
		promiseArray.forEach((promise, index) => {
			promise
				.then((response) => {
					result[index] = response
					resolve(result)
				})
				.catch((err) => {
					rejectedPromises = rejectedPromises + 1
					if (rejectedPromises === promiseArray.length) {
						reject(result)
					}
				})
		})
	})
}

myPromiseDotAny(promises)
	.then((res) => console.log(res, 'then'))
	.catch((err) => console.log(err, 'catch'))
