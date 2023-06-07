const person = {
	fName: 'John',
	lName: 'Snow',
}

function showFullname(arg1, arg2, arg3) {
	return `${arg1} ${arg2} ${arg3} ${this.fName} ${this.lName}`
}

const fullName = showFullname.bind(person)

const s = fullName('You', 'know', 'nothing')
//console.log(s)

/** PolyFill*/

Function.prototype.myBind = function (context, ...args) {
	let originalFunction = this
	return (...innerArgs) => {
		// The use of apply is just one way to invoke the function with a specific context (this value) and arguments.
		return originalFunction.apply(context, args.concat(innerArgs))
	}
}

const fullNameP = showFullname.myBind(person)
const returnedFullName = fullName('You', 'know', 'nothing')
console.log(returnedFullName)
