/**
 * Remove duplicates from the array
 * @param {Array}
 */

const removeDuplicates = (array) => {
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] === array[i + 1]) {
			array.splice(i + 1, 1)
			i--
		}
	}
	return array.length
}

console.log(removeDuplicates([1, 2, 4, 3, 2, 1, 2, 2, 13, 45, 5]))
