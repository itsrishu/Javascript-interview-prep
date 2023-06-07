let outputArray = []
const flattenDeeplyNestedArray = (arr) => {
	for (const item of arr) {
		if (Array.isArray(item)) {
			flattenDeeplyNestedArray(item)
		} else {
			outputArray = [...outputArray, item]
		}
	}
	return outputArray
}

const ex = [1, 23, 'as', [1, 4, 'as', 'ke', [1, 7, 5, 5, 4, 'hello']]]

console.log(flattenDeeplyNestedArray(ex))
