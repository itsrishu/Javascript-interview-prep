function findMissingNumber(arr) {
	// Find the minimum and maximum values in the array
	const min = Math.min(...arr)
	const max = Math.max(...arr)

	// Calculate the expected sum of the consecutive numbers
	const expectedSum = ((min + max) * (max - min + 1)) / 2

	// Calculate the actual sum of the numbers in the array
	const actualSum = arr.reduce((sum, num) => sum + num, 0)

	// Return the missing number
	return expectedSum - actualSum
}

// Example usage:
const numbersWithMissing = [33, 34, 36]
const missingNumber = findMissingNumber(numbersWithMissing)
console.log('Missing Number:', missingNumber)

// if number starts from 1

function findMissingNumber(arr) {
	const n = arr.length + 1 // Considering one missing number
	const expectedSum = (n * (n + 1)) / 2
	const actualSum = arr.reduce((sum, num) => sum + num, 0)

	return expectedSum - actualSum
}

// Example usage:
const numbersWithMis = [1, 2, 3, 5, 6]
const missingNu = findMissingNumber(numbersWithMis)
console.log('Missing Number:', missingNu)
