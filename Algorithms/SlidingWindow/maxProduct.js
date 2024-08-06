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

function getMaxProductSubarrayMod(arr) {
	const n = arr.length
	let subarray = []
	let maxProduct = -Infinity
	for (let i = 0; i < n; i++) {
		let currentProduct = 1 // Start with 1
		for (let j = i; j < n; j++) {
			currentProduct *= arr[j]
			if (currentProduct > maxProduct) {
				maxProduct = currentProduct
				subarray = arr.slice(i, j + 1)
			}
		}
	}
	return subarray
}

function getMaxProductSubarrayOptimised(arr) {
	if (arr.length === 0) return []

	let maxProduct = arr[0]
	let minProduct = arr[0]
	let result = arr[0]
	let start = 0,
		end = 0,
		tempStart = 0

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < 0) {
			;[maxProduct, minProduct] = [minProduct, maxProduct]
		}

		maxProduct = Math.max(arr[i], maxProduct * arr[i])
		minProduct = Math.min(arr[i], minProduct * arr[i])

		if (maxProduct > result) {
			result = maxProduct
			start = tempStart
			end = i
		}

		if (maxProduct == arr[i]) {
			tempStart = i
		}
	}

	return arr.slice(start, end + 1)
}

// Example usage
let array = [-2, 0, 1]
let result = getMaxProductSubarrayMod(array)

console.log('Maximum product:', result)
