//List down all the subarrays with min and max of the subarrays

function getMinMax(arr) {
	const n = arr.length
	const result = []
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			let subarray = []
			let min = Infinity
			let max = -Infinity

			for (let k = i; k <= j; k++) {
				subarray.push(arr[k])
				if (arr[k] < min) min = arr[k]
				if (arr[k] > max) max = arr[k]
			}

			if (min + max < 5) {
				result.push({ subarray, min, max })
			}
		}
	}
	return result
}

const example = [1, 2, 3, -8, 5]
const r = getMinMax(example)
//console.log(r)

function getMinMaxOptimised(arr) {
	const n = arr.length
	const result = []

	for (let i = 0; i < n; i++) {
		let min = arr[i]
		let max = arr[i]

		for (let j = i; j < n; j++) {
			// Update min and max for the current subarray
			min = Math.min(min, arr[j])
			max = Math.max(max, arr[j])

			// If the sum of min and max is less than 5, store the result
			if (min + max < 5) {
				result.push({ subarray: arr.slice(i, j + 1), min, max })
			}
		}
	}

	return result
}

// Example usage:
const result = getMinMaxOptimised(example)
console.log(result, '11')
