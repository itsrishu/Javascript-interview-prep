const example = [1, 2, 3]

const sum = example.reduce((acc, item) => {
	acc = acc + item
	return acc
}, 0)

//console.log(sum)

Array.prototype.myReduce = function (cb, ini) {
	let acc = ini
	for (let i = 0; i < this.length; i++) {
		acc = acc ? cb(acc, this[i], i, this) : this[i]
	}

	return acc
}

const newSum = example.myReduce((acc, item) => (acc += item), 0)

console.log(newSum)
