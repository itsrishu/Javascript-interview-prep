const { log, time, timeEnd } = console

/* Write a function that will allow you to do this */

function createbase(params) {
	return (b) => {
		return params + b
	}
}

var addSix = createbase(6)

//log(addSix(10)) // 16
//log(addSix(21)) // 27

/* What will be the logged into the console */

let count = 0
;(function printCount() {
	if (count === 0) {
		let count = 1
		//	console.log(count) // 1
	}
	//	console.log(count) // 0
})()

/* TIME OPTIMIZATION */

function find() {
	let a = []
	for (let i = 0; i < 1000000; i++) {
		a[i] = i * 1
	}

	return (index) => {
		log(a[index])
	}
}

const closureValue = find()

/*  
    time('6')
    closureValue(6)
    timeEnd('6')

    time('50')  
    closureValue(50)
    timeEnd('50')

*/

/* BLOCK SCOPE & SET-TIMEOUT */

// var keyword being a function scoped is always hoisted at the top fo the function so the value of I moves to the top of the file and doesnot remain at teh block scope
// hence the value of I keep on incrementing untill it becomes 3 and comes out of the loop
// so I becomes 3 and prints 3 inside setTimeout as JS engine runs synchronus and setTimeout is asynchronus

// To print the value of I inside setTimeout we need to change the declaration of I to blockscope by using let

for (var i = 0; i < 3; i++) {
	setTimeout(() => {
		log(i) // 3
	}, i * 1000)
}

for (let i = 0; i < 3; i++) {
	setTimeout(() => {
		log(i) // 0, 1, 2
	}, i * 1000)
}

// Print  0, 1, 2 using var

for (var i = 0; i < 3; i++) {
	function inner(i) {
		// using a closure as teh i being is no longer the hoisted i but a local variable of the inner function
		setTimeout(() => {
			log(i) // 0, 1, 2
		}, i * 1000)
	}
	inner(i)
}

/* MAKE THIS RUN ONLY ONCE */

let view = 0

function callOnlyOnce() {
	let called = 0
	return () => {
		if (called > 0) {
			console.log('Already Subscribed')
		} else {
			console.log('Subscribed')
			called++
		}
	}
}

const localInstance = callOnlyOnce()

localInstance()
localInstance()
localInstance()
localInstance()
localInstance()
localInstance()
localInstance()

/* MAKE THIS RUN ONLY ONCE --- MORE GENRIC SOLUTION - POLYFILL OF LODASH ONCE */

function once(func, context) {
	let ran
	return function () {
		if (func) {
			ran = func.apply(context || this, arguments)
			ran = null
		}
		return ran
	}
}

const hello = once((a, b) => console.log('Hello', a, b))

hello(1, 2)
hello(1, 2)
hello(1, 2)
hello(1, 2)
hello(1, 2)
hello(1, 2)
