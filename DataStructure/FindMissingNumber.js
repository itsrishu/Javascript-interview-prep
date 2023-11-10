/*Find missing number from an array*/

function findMissingNumbers(array) {
	let min = Math.min(...array)
	let max = Math.max(...array)
	const missingNumbers = []
	let presence = {}
	for (let i = 0; i <= array.length; i++) {
		presence[array[i]] = true
	}

	for (let i = min; i <= max; i++) {
		if (!presence[i]) {
			missingNumbers.push(i)
		}
	}
	return missingNumbers
}

function findMissingNumber(arr) {
	let min = Math.min(...arr)
	let max = Math.max(...arr)
	let expSum = ((max + min) * (max - min + 1)) / 2
	let actualSum = arr.reduce((acc, ini) => acc + ini, 0)
	console.log(expSum, actualSum)
	return expSum - actualSum
}

console.log(findMissingNumber([33, 34, 36]))
