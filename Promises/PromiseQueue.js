// Helper function to replace the resolved promise in the queue
const replaceResolvedPromise = async (promise, remainingPromises) => {
	await promise // Wait for the current promise to resolve
	if (remainingPromises.length > 0) {
		// Replace resolved promise with the next one in the list
		const nextPromise = remainingPromises.shift()
		queue[queue.indexOf(promise)] = nextPromise
		// Recursively process the next promise
		replaceResolvedPromise(nextPromise)
	}
}

async function processPromisesInPairs(promises) {
	// Copy the array of promises to avoid mutating the original array
	const remainingPromises = [...promises]

	// Initialize the queue with the first two promises
	let queue = [remainingPromises.shift(), remainingPromises.shift()]

	// Start processing the initial two promises in the queue
	replaceResolvedPromise(queue[0], remainingPromises)
	replaceResolvedPromise(queue[1], remainingPromises)

	// Wait for the remaining promises in the queue to complete
	return Promise.all(queue)
}

// Example usage:
const createPromise = (id, delay) =>
	new Promise((resolve) =>
		setTimeout(() => resolve(`Promise ${id} resolved`), delay)
	)

const promisesArray = [
	createPromise(1, 1000),
	createPromise(2, 2000),
	createPromise(3, 1500),
	createPromise(4, 3000),
	createPromise(5, 500),
	createPromise(6, 700),
]

processPromisesInPairs(promisesArray).then((results) => {
	console.log('All promises resolved:', results)
})
