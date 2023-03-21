const asyncFunctionInParallel = async (promisesArray, callback) => {
	let completedTask = 0
	let results = []
	promisesArray.forEach((task) => {
		task((res) => {
			results.push(res)
			completedTask += 1
			if (completedTask === promisesArray.length) {
				callback(results)
			}
		})
	})
}

function createAsyncTask() {
	const value = Math.floor(Math.random() * 10)
	return function (callback) {
		setTimeout(() => {
			callback(value)
		}, value * 1000)
	}
}

const taskList = [createAsyncTask(), createAsyncTask(), createAsyncTask(), createAsyncTask(), createAsyncTask(), createAsyncTask(), createAsyncTask()]

asyncFunctionInParallel(taskList, (res) => {
	console.log(res)
})
