function getMaxSum(arr) {
	const n = arr.length
	let maxSum = -Infinity
	let start = 0
	let end = 0
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			let currentSum = 0
			for (let k = i; k <= j; k++) {
				currentSum += arr[k]
			}

			if (currentSum > maxSum) {
				maxSum = currentSum
				start = i
				end = j
			}
		}
	}

	const arry = arr.slice(start, end + 1)

	return { maxSum, arry }
}

const example = [1, 2, 3, -8, 5]
const r = getMaxSum(example)
console.log(r)
