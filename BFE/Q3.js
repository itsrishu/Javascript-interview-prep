/* Implement Array.flat */

const arr = [1, [2], [3, [4]]]

function flat(arr, depth = 1) {
	let result = []

	for (let item of arr) {
		if (Array.isArray(item) && depth > 0) {
			const flatenned = flat(item, depth - 1)
			for (let itemNext of flatenned) {
				result.push(itemNext)
			}
		} else {
			result.push(item)
		}
	}
	return result
}

/* Using Array.reduce */

function flatUsingReduce(arr, depth = 1) {
	return arr.reduce((res, item) => {
		if (Array.isArray(item) && depth > 0) {
			res.push(...flatUsingReduce(item, depth - 1))
		} else {
			res.push(item)
		}
		return res
	}, [])
}

console.log(flat(arr))
// [1, 2, 3, [4]]

console.log(flat(arr, 1))
// [1, 2, 3, [4]]

console.log(flat(arr, 2))
// [1, 2, 3, 4]

console.log(flatUsingReduce(arr))
// [1, 2, 3, [4]]

console.log(flatUsingReduce(arr, 1))
// [1, 2, 3, [4]]

console.log(flatUsingReduce(arr, 2))
// [1, 2, 3, 4]

// For time complexity, each item and bracket pair is traversed once so it is linear to the count of them.

// For space complexity, we have a recursion stack and intermediate result array, which in total linear space.
