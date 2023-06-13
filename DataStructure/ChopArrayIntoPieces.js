/*
    Given an array and size k, chop the array into chunks of k-length and return them as an array.    
    arr - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    k - 3
*/

function chopArrayIntoPieces(arr, k) {
	let chunks = []
	for (let i = 0; i < arr.length; i += k) {
		const chunk = arr.slice(i, i + k)
		chunks.push(chunk)
	}

	return chunks
}

console.log(chopArrayIntoPieces([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
