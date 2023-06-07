/*
    Given a N dimensional array of integers arr and depth, flatten this array till the specified depth and return the flattened array.
*/

//Input: arr = [1, 2, 3, [4, 5, [6, 7]]] , depth = 1

function flattenAnArray(arr, depth) {
	let flattenArray = []
	function flattenArrayHelper(helperArray, currentDepth) {
		for (let item of helperArray) {
			if (Array.isArray(item) && currentDepth < depth) {
				flattenArrayHelper(item, currentDepth + 1)
			} else {
				flattenArray.push(item)
			}
		}
	}

	flattenArrayHelper(arr, 0)
	return flattenArray
}

const arr = [1, [2, [3, 4], 5], 6]
const depth = 2

const result = flattenAnArray(arr, depth)
console.log(result)
