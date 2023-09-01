function rotateArray(arr, k) {
	const n = arr.length
	if (n === 0) return arr

	// Normalize k to be in the range [0, n)
	k = k % n

	if (k < 0) {
		// If k is negative, convert it to a positive rotation
		k = n + k
	}

	const rotated = []

	for (let i = 0; i < n; i++) {
		const newIndex = (i + k) % n
		rotated[newIndex] = arr[i]
	}
	return rotated
}

// w/o the extra space

function rotateArrayInPlace(arr, k) {
	const n = arr.length
	if (n === 0) return arr

	// Normalize k to be in the range [0, n)
	k = k % n

	if (k < 0) {
		// If k is negative, convert it to a positive rotation
		k = n + k
	}

	reverseArray(arr, 0, n - 1) // Reverse the entire array
	reverseArray(arr, 0, k - 1) // Reverse the first part of the array (0 to k - 1)
	reverseArray(arr, k, n - 1) // Reverse the second part of the array (k to n - 1)

	return arr // Return the rotated array
}

// Helper function to reverse a portion of the array in place
function reverseArray(arr, start, end) {
	while (start < end) {
		const temp = arr[start]
		arr[start] = arr[end]
		arr[end] = temp
		start++
		end--
	}
}
