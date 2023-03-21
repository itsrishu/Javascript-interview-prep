//Takes in List of async functions
const asyncFunctionInSeries = async (promisesArray) => {
	for (let promise of promisesArray) {
		try {
			const result = await promise
			console.log(result)
		} catch (e) {
			console.log(e)
		}
	}
}

//Alternate approach - Using Array.reduce()

const alternateApproach = (promisesArray) => {
	promisesArray.reduce((acc, current) => {
		return acc.then((data) => {
			return current.then((val) => {
				console.log(val)
			})
		})
	}, Promise.resolve())
}

//Input
const asyncTask = (i) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(`Completing ${i}`), 100 * i)
	})
}

const promises = [asyncTask(3), asyncTask(1), asyncTask(7), asyncTask(2), asyncTask(5)]

// Promise.all(promises).then((val) => {
// 	console.log(val)
// })

// asyncFunctionInSeries(promises)

alternateApproach(promises)
