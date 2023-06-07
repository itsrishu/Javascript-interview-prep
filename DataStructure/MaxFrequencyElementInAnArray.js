/*
Given an array arr with different counts of number we have to find the number with most frequency and return it.

If there are two or more numbers with same most frequency the return the biggest number.

Input: arr = [1, 2, 2, 3, 3, 3]
Output: 3
*/

function getMaxFrequency(arr) {
	let result = {}

	for (let i = 0; i < arr.length; i++) {
		const element = arr[i]

		if (result.hasOwnProperty(element)) {
			result[element]++
		} else {
			result[element] = 1
		}
	}

	console.log(result, 'asassas')

	let maxFreq = -Infinity
	let numWithMaxFreq = -Infinity

	for (const [index, val] of Object.entries(result)) {
		if (val > maxFreq) {
			maxFreq = val
			numWithMaxFreq = index
		} else if (val === maxFreq && index > numWithMaxFreq) {
			numWithMaxFreq = index
		}
	}
	return { maxFreq, numWithMaxFreq }
}

console.log(getMaxFrequency([1, 2, 2, 3, 3, 3]))
