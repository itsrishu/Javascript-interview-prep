const example = [2, 5, 6, 343, 33]

const filArr = example.filter((item) => item > 5)

console.log(filArr)

Array.prototype.myFilter = function (cb) {
	let arr = []
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			arr.push(this[i])
		}
	}
	return arr
}

console.log(example.myFilter((item) => item > 5))
