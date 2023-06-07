const person = {
	fName: 'Abhi',
	lName: 'Shek',
}

/** Don't use arrow function to implement call as arrow function don't have their own this */
function showFullName(arg1, arg2) {
	console.log(this)
	return `${arg1} ${this.fName}${this.lName}${arg2}`
}

const res = showFullName.call(person, 'hi', '!')
//console.log(res)

/** PolyFill*/

Function.prototype.myCall = function (context, ...args) {
	context = context || window
	const uniqueId = Symbol()
	context[uniqueId] = this
	const result = context[uniqueId](...args)
	delete context[uniqueId]
	return result
}

const newResult = showFullName.myCall(person, 'Hello', 'brother')

console.log(newResult)
