function largestNumber(arr) {
	// Convert each number to a string
	const strArr = arr.map(String)

	// Sort the array with a custom comparator
	strArr.sort((a, b) => b + a - (a + b))

	// Join the sorted array into a single string
	const result = strArr.join('')

	// Handle the case where all numbers are zeros
	return result[0] === '0' ? '0' : result
}

const numberss = [9, 24, 10, 73]
console.log(largestNumber(numberss)) // Output: "99241073"

function largestNumberByLooping(arr) {
	// Convert numbers to strings for concatenation comparisons
	const strArr = arr.map(String)

	// Bubble sort logic to arrange numbers for the largest concatenation
	for (let i = 0; i < strArr.length; i++) {
		for (let j = i + 1; j < strArr.length; j++) {
			// Compare two combinations to decide order
			if (strArr[i] + strArr[j] < strArr[j] + strArr[i]) {
				// Swap if strArr[j] + strArr[i] is larger
				;[strArr[i], strArr[j]] = [strArr[j], strArr[i]]
			}
		}
	}

	// Join the sorted array into a single string
	const result = strArr.join('')

	// Handle edge case where all numbers are zeros
	return result[0] === '0' ? '0' : result
}

const numbers = [9, 24, 10, 73]
console.log(largestNumberByLooping(numbers)) // Output: "99241073"
