async function promisesBatching(arr, batch) {
	for (var i = 0; i < arr.length; i = i + batch) {
		const newBatch = arr.slice(i, i + batch)
		const batchResults = promisea.all(newBatch)
		return batchResults
	}
}

const promisesArray = []
const batchSize = 4

promisesBatching(promisesArray, batchSize)
	.then((res) => console.log(res))
	.catch((err) => console.log(err))
