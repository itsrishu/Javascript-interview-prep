const exampleArray = [1, 2, 3]

const returnedArray = exampleArray.map((item) => item * 2)

//console.log(returnedArray)

Array.prototype.myMap = function (cb) {
	let arr = []
	for (let i = 0; i < this.length; i++) {
		const res = cb(this[i], i, this)
		arr.push(res)
	}
	return arr
}

const results = exampleArray.myMap((item) => item * 2)

console.log(results)
