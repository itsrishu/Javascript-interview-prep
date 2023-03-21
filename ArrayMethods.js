/* MAP POLYFILL  */

Array.prototype.myMap = function (callback) {
	let temp = []
	for (let index = 0; index < this.length; index++) {
		temp.push(callback(this[index], index, this))
	}
	return temp
}

const nums = [5, 6, 7]

const multiplyBy2 = nums.myMap((num, i, arr) => {
	return num * 2
})

/* FILTER POLYFILL  */

Array.prototype.myFilter = function (cb) {
	let temp = []
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			temp.push(this[i])
		}
	}
	return temp
}

const numsArray = [5, 6, 7]

const numberLessThan6 = numsArray.myFilter((num, i, arr) => num === 5)

/* REDUCE POLYFILL  */

Array.prototype.myReduce = function (cb, initialValue) {
	let accumulator = initialValue

	for (let i = 0; i < this.length; i++) {
		accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
	}

	return accumulator
}

const numsArrayForReduce = [5, 6, 7]

const reducedSum = numsArrayForReduce.myReduce((acc, current) => {
	return acc + current
}, 0)

console.log(reducedSum)
