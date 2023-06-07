/*
Given an array arr with different counts of number we have to find the number with least frequency and return it.

If there are two or more numbers with same least frequency the return the biggest number.


Input: arr = [1, 2, 2, 3, 3, 3]
Output: 1
*/

function getLeastFrequentElement(arr) {
	let res = {}
	for (let i = 0; i < arr.length; i++) {
		if (res.hasOwnProperty(arr[i])) {
			res[arr[i]]++
		} else {
			res[arr[i]] = 1
		}
	}

	let leastFrequency = Infinity
	let numWithMinLeastFrequency = -Infinity

	for (const num in res) {
		if (res[num] < leastFrequency) {
			leastFrequency = res[num]
			numWithMinLeastFrequency = num
		} else if (
			res[num] === leastFrequency &&
			num > numWithMinLeastFrequency
		) {
			numWithMinLeastFrequency = num
		}
	}

	return { leastFrequency, numWithMinLeastFrequency }
}

console.log(
	getLeastFrequentElement([1, 1, 1, 1, 1, 3, 3, 3, 100, 7, 7, 7, 7, 7])
)
