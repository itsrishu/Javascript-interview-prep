function getSubArray(arr) {
	let n = arr.length
	let results = []
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			let subArray = []
			for (let k = i; k <= j; k++) {
				subArray.push(arr[k])
			}
			results.push(subArray)
		}
	}
	return results
}

const example = [1, 2, 3]
const r = getSubArray(example)
console.log(r)
