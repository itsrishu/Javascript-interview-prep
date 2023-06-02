import React from 'react'

const STATES = {
	PENDING: 0,
	FILFILLED: 1,
	REJECTED: 2,
}

class MyPromise {
	constructor(cb) {
		this.state = STATES.PENDING
		this.value = undefined
		this.handler = []

		try {
			callback(this._resolve, this._reject)
		} catch (err) {
			this.reject(err)
		}
	}
}
