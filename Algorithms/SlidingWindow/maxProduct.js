/*
Given an integer array, find the contiguous subarray within an array (containing at least one number) which has the largest product.
Example: For the array [2, 3, -2, 4], the maximum product subarray is [2, 3] with a product of 6.

*/

// function getMaxProduct(arr) {
// 	const n = arr.length
// 	let maxProduct = -Infinity
// 	let start = 0
// 	let end = 0
// 	const result = []

// 	for (let i = 0; i < n; i++) {
// 		for (let j = i; j < n; j++) {
// 			let currentProduct = 1
// 			for (let k = i; k <= j; k++) {
// 				currentProduct = currentProduct * arr[k]
// 			}

// 			if (currentProduct > maxProduct) {
// 				maxProduct = currentProduct
// 				start = i
// 				end = j
// 			}

// 			const arry = arr.slice(start, end + 1)
// 			result.push({ maxProduct, arry })
// 		}
// 	}
// 	return result
// }

function getMaxProductSubarray(arr) {
	const n = arr.length
	let subarray = []
	let maxProduct = -Infinity
	// let start = 0
	// let end = 0

	// for (let i = 0; i < n; i++) {
	// 	for (let j = i; j < n; j++) {
	// 		let currentProduct = 1
	// 		for (let k = i; k <= j; k++) {
	// 			currentProduct *= arr[k]
	// 		}

	// 		if (currentProduct > maxProduct) {
	// 			maxProduct = currentProduct
	// 			start = i
	// 			end = j
	// 		}
	// 	}
	// }

	// const maxProductSubarray = arr.slice(start, end + 1)
	// return { maxProduct, maxProductSubarray }

	for (let i = 0; i < array.length; i++) {
		let currentProduct = arr[0]
		for (let j = i; j < array.length; j++) {
			currentProduct = array[j] * currentProduct
			if (currentProduct > maxProduct) {
				maxProduct = currentProduct
				subarray = arr.slice(i, j + 1)
			}
		}
	}
	return subarray
}

// Example usage
let array = [2, 3, -2, 4]
let result = getMaxProductSubarray(array)

console.log('Maximum product:', result)
