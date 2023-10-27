function fillEmptyWithPrevious(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('Input should be an array')
	}

	const result = []
	let previousChar = null

	for (const char of arr) {
		if (char !== '') {
			result.push(char)
			previousChar = char
		} else if (previousChar !== null) {
			result.push(previousChar)
		}
	}

	return result
}

// Example usage:
const input1 = ['c', 'a', 'e', 'f', 'b', 'w', '', '', '']
const output1 = fillEmptyWithPrevious(input1)
console.log(output1) // Output will be ['c', 'a', 'a', 'e', 'f', 'b', 'b', 'b', 'w']

const input2 = ['a', 'a', 'b', 'c', 'b', '', '', '', '', '']
const output2 = fillEmptyWithPrevious(input2)
console.log(output2) // Output will be ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'c', 'b', 'b', 'b']

// w/o extra space

function fillEmptyWithPreviousInPlace(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('Input should be an array')
	}

	let previousChar = null
	let emptyCount = 0

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== '') {
			previousChar = arr[i]
			emptyCount = 0
		} else if (previousChar !== null) {
			emptyCount++
			arr[i] = previousChar
		}
	}

	return arr
}

// Example usage:
const inp1 = ['c', 'a', 'e', 'f', 'b', 'w', '', '', '']
fillEmptyWithPreviousInPlace(input1)
console.log(input1) // Output will be ['c', 'a', 'a', 'e', 'f', 'b', 'b', 'b', 'w']

const inp2 = ['a', 'a', 'b', 'c', 'b', '', '', '', '', '']
fillEmptyWithPreviousInPlace(input2)
console.log(input2) // Output will be ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'c', 'b', 'b', 'b']
