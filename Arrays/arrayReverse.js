//reverse an array

function reverseArray(arr) {
	const reversed = []
	for (let i = arr.length - 1; i >= 0; i--) {
		reversed.push(arr[i])
	}
	return reversed
}

// reverse an array w/o extra space

function reverseArrayInPlace(arr) {
	for (let i = 0; i < Math.floor(arr.length / 2); i++) {
		const temp = arr[i]
		arr[i] = arr[arr.length - 1 - i]
		arr[arr.length - 1 - i] = temp
	}
	return arr
}

const originalArray = [1, 2, 3, 4, 5]
const reversedArray = reverseArrayInPlace(originalArray)

console.log(reversedArray) // Output: [5, 4, 3, 2, 1]
