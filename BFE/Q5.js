/* Write a function to shuffle an array*/

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		console.log(i, j)
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}
console.log(shuffleArray([1, 2, 3]))
