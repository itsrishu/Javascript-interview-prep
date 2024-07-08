/**
 * Find kth largest number in an array
 * @param {Array}
 */

function kthLargest(arr, k) {
	if (k > arr.length || k <= 0) {
		return null // Return null if k is out of bounds
	}

	for (let i = 0; i < k; i++) {
		let maxIndex = i
		// Find the largest element in the remaining unsorted portion
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] > arr[maxIndex]) {
				maxIndex = j
			}
		}
		// Swap the found largest element to the current position i
		;[arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]
	}

	// The k-th largest element is now at index k-1
	return arr[k - 1]
}

// Example usage:
const arr = [3, 1, 5, 12, 2, 11]
const k = 3
console.log(`The ${k}rd largest number is: ${kthLargest(arr, k)}`) // Output: The 3rd largest number is: 5
