let person = {
	name: 'John Doe',
	greet: function () {
		return "Hi, I'm " + this.name
	},
}

let teacher = Object.create(person)

console.log(teacher.greet())

teacher.name = 'Jane Doe'
teacher.teach = function (subject) {
	return 'I can teach ' + subject
}

console.log(teacher.greet())
console.log(teacher.teach('Maths'))
