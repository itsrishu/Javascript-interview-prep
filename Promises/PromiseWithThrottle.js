/*
With throttling, a limited number of tasks are executed at a time. 
When one finishes, the next starts until all tasks are completed.

Here's a function that allows you to throttle the number of concurrently running promises:
*/

async function runTasksWithThrottling(tasks, limit) {
	const result = []
	const executing = []

	for (const task of tasks) {
		const promise = task.then(() => {
			executing.splice(executing.indexOf(promise), 1)
			return result
		})
	}

	result.push(promise)
	executing.push(promise)

	if (executing.length >= limit) {
		await Promise.race(executing)
	}

	return Promise.all(results)
}

const tasks = [
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve('Task 1 done'), 1000)
		),
	() =>
		new Promise((resolve) =>
			setTimeout(() => resolve('Task 2 done'), 2000)
		),
	() =>
		new Promise((resolve) => setTimeout(() => resolve('Task 3 done'), 500)),
]

runTasksWithThrottling(tasks, 2).then(console.log)
