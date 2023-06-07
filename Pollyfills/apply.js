const person = {
	fName: 'John',
	lName: 'Snow',
}

function showFullname(arg1, arg2, arg3) {
	return `${arg1} ${arg2} ${arg3} ${this.fName} ${this.lName}`
}

const fullName = showFullname.apply(person, ['You', 'know', 'nothing'])

//console.log(fullName)

/** PolyFill*/

Function.prototype.myApply = function (context, args) {
	context = context || window
	const uniqueId = Symbol()
	context[uniqueId] = this
	let result
	if (args) {
		result = context[uniqueId](...args)
	} else {
		result = context[uniqueId]()
	}
	delete context[uniqueId]
	return result
}

const fullNameP = showFullname.myApply(person, ['You', 'know', 'nothing'])

console.log(fullNameP)
