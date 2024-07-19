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
console.log(r)
