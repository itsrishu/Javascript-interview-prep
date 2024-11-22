const { log } = console

// [] == [] - false
// [] === [] - false
// [1, 2] == [1, 2] // false

const obj = {
	name: 'AB',
	greet: () => {
		return 'hi' + this.name
	},

	tell: function () {
		return 'hi' + this.name
	},

	speak: function () {
		return function () {
			return 'hi' + this.name
		}
	},
}

log(obj.greet(), 'arrow')
log(obj.tell(), 'normal')
log(obj.speak()(), 'return func')

const { greet, tell, speak } = obj

log(tell(), 'destructured normal')
log(speak()(), 'destructured returned')

let x

x = 10

function inner() {
	log(x, 'inside inner')
	var x = 30
}

inner()
