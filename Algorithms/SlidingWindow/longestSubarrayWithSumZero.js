function longestSubarrayWithSumZero(arr) {
	let maxLength = 0
	let longestSubarray = []

	for (let i = 0; i < arr.length; i++) {
		let sum = 0
		for (let j = i; j < arr.length; j++) {
			sum += arr[j]
			if (sum === 0) {
				if (j - i + 1 > maxLength) {
					maxLength = j - i + 1
					longestSubarray = arr.slice(i, j + 1)
				}
			}
		}
	}

	return { maxLength, longestSubarray }
}

// Example usage
const resultt = longestSubarrayWithSumZero([1, 2, -3, 3, 1, -1, 2, -2])
console.log(resultt.maxLength) // 6
console.log(resultt.longestSubarray) // [2, -3, 3, 1, -1, 2, -2]

function longestSubarrayWithSumZero(arr) {
	const sumIndexMap = new Map()
	let sum = 0
	let maxLength = 0
	let endIndex = -1

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]

		if (sum === 0) {
			maxLength = i + 1
			endIndex = i
		}

		if (sumIndexMap.has(sum)) {
			if (i - sumIndexMap.get(sum) > maxLength) {
				maxLength = i - sumIndexMap.get(sum)
				endIndex = i
			}
		} else {
			sumIndexMap.set(sum, i)
		}
	}

	const startIndex = endIndex - maxLength + 1
	const longestSubarray = arr.slice(startIndex, endIndex + 1)

	return { maxLength, longestSubarray }
}

// Example usage
const result = longestSubarrayWithSumZero([1, 2, -3, 3, 1, -1, 2, -2])
console.log(result.maxLength) // 6
console.log(result.longestSubarray) // [2, -3, 3, 1, -1, 2]
