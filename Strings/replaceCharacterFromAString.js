function replaceAllOccurrences(inputString, searchChar, replacementChar) {
	if (typeof inputString !== 'string') {
		throw new Error('Input should be a string')
	}

	const inputArray = inputString.split('') // Convert the string to an array of characters
	const resultArray = []

	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] === searchChar) {
			resultArray.push(replacementChar)
		} else {
			resultArray.push(inputArray[i])
		}
	}

	return resultArray.join('') // Convert the array back to a string
}

// Example usage:
const originalString = 'aababbaab'
const resultString = replaceAllOccurrences(originalString, 'a', 'b')
console.log(resultString) // Output will be 'bbbbbbbbb'

// no extra variable

function replaceAllOccurrencesInPlace(
	inputString,
	searchChar,
	replacementChar
) {
	if (typeof inputString !== 'string') {
		throw new Error('Input should be a string')
	}

	const inputArray = inputString.split('') // Convert the string to an array of characters

	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] === searchChar) {
			inputArray[i] = replacementChar
		}
	}

	return inputArray.join('') // Convert the modified array back to a string
}

// Example usage:
let originalStr = 'aababbaab'
originalString = replaceAllOccurrencesInPlace(originalStr, 'a', 'b')
console.log(originalString) // Output will be 'bbbbbbbbb'

// using regex
function replaceAllOccurrences(inputString, searchChar, replacementChar) {
	if (typeof inputString !== 'string') {
		throw new Error('Input should be a string')
	}

	// Use a regular expression with 'g' flag to replace all occurrences
	return inputString.replace(new RegExp(searchChar, 'g'), replacementChar)
}

// Example usage:
const originalSt = 'aababbaab'
const resString = replaceAllOccurrences(originalSt, 'a', 'b')
console.log(resString) // Output will be 'bbbbbbbbb'
