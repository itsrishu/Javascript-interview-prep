const employeeOne = {
	firstName: 'John',
	lastName: 'Right',
}

const employeeTwo = {
	firstName: 'Steve',
	lastName: 'Waugh',
}

// --------Call--------

// Call - invokes a function with a given this value and commma separated arguments.
// invoke the function immidiately
// comma separated values and array are major difference between call & apply

function myCall(arg1, arg2) {
	return `${arg1} ${this.firstName}! ${arg2}`
}

console.log(myCall.call(employeeOne, 'Hi', 'How are you?'))
console.log(myCall.call(employeeTwo, 'Hi', 'How are you?'))

// --------Apply--------

// Apply - invokes a function with a given this value and an array of arguments
// invoke the function immidiately
// comma separated values and array are major difference between call & apply

function myApply(arg1, arg2) {
	return `${arg1} ${this.firstName}! ${arg2}`
}

console.log(myApply.apply(employeeOne, ['Hi', 'How are you?']))
console.log(myApply.apply(employeeTwo, ['Hi', 'How are you?']))

// --------Bind--------

// Bind - returns a new function allowing you to pass any number of  arguments

function myBind(arg1, arg2) {
	return `${arg1} ${this.firstName}! ${arg2}`
}

const bindEmp1 = myBind.bind(employeeOne)
console.log(bindEmp1('Hi', 'How are you?'))

const bindEmp2 = myBind.bind(employeeTwo)
console.log(bindEmp2('Hi', 'How are you?'))
