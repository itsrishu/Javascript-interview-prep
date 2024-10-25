class Node {
	constructor(data) {
		this.data = data
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}

	addFirst(d) {
		const newNode = new Node(d)
		if (this.head) {
			newNode.next = this.head
		}
		this.head = newNode
	}

	getSize() {
		let count = 0
		let current = this.head
		while (current) {
			count++
			current = current.next
		}
		return count
	}

	addLast(d) {
		const newNode = new Node(d)
		if (this.head) {
			let current = this.head
			while (current.next) {
				current = current.next
			}
			current.next = newNode
			return
		}
		this.head = newNode
	}

	addAt(index, d) {
		// check 0 < index > size of the list
		if (index < 0 || index > this.size()) {
			throw new Error('Inavlid index')
		}

		// new node created
		const newNode = new Node(d)
		// if list is empty
		if (index === 0) {
			newNode.next === this.head
			this.head = newNode
		}

		// if list is not empty
		let current = this.head // assigning head to an variable
		for (let i = 0; i < index - 1; i++) {
			current = current.next // looping till index - 1 to find the exact place where item needs to be inserted
		}
		newNode.next = current.next // assigning newNode.next to current.next so that it fits the list
		current.next = newNode // new item to be placed at current.next
	}

	removeTop() {
		if (!this.head) {
			return
		}

		this.head = this.head.next
	}

	removeLast() {
		if (!this.head) {
			throw new Error('Empty list')
		}
		let current = this.head
		while (current.next.next) {
			current = current.next
		}
		current.next = null
	}

	removeAt(index) {
		if (index < 0 || index > this.getSize()) {
			throw new Error('Invalid index')
		}

		let current = this.head
		for (let i = 0; i < this.getSize() - 1; i++) {
			current = current.next
		}
		if (current.next) {
			current.next = current.next.next
		}
	}

	print() {
		let current = this.head
		while (current) {
			console.log(current.data)
			current = current.next
		}
	}
}

const linkedListObj = new LinkedList()
linkedListObj.addFirst(45)
linkedListObj.addFirst(40)
linkedListObj.addFirst(14)
linkedListObj.addFirst(9)
linkedListObj.addFirst(10)
linkedListObj.print()
linkedListObj.removeLast()
linkedListObj.print()
