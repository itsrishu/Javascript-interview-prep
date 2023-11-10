class Vehicle {
	constructor(type, licensePlateNumber, parkingStartTime) {
		this.type = type
		this.licensePlateNumber = licensePlateNumber
		this.parkingStartTime = parkingStartTime
	}
}

class ParkingSlot {
	constructor(slotNumber, vehicleType, occupied, vehicle) {
		this.slotNumber = slotNumber
		this.vehicleType = vehicleType
		this.occupied = occupied
		this.vehicle = vehicle
	}
}

class ParkingLot {
	constructor(slots) {
		this.slots = slots
		for (let i = 0; i < 10; i++) {
			slots.push(new ParkingSlot(i, 'car', false))
		}
	}

	park(vehicle) {
		// Find an empty slot for the vehicle.
		const emptySlot = this.slots.find((slot) => !slot.occupied)

		if (emptySlot) {
			// Park the vehicle in the empty slot.
			emptySlot.occupied = true
			emptySlot.vehicle = vehicle

			return true
		} else {
			// The parking lot is full.
			return false
		}
	}

	addSlot(s) {
		this.slots.push(s)
		return true
	}

	unpark(vehicle) {
		// Find the slot where the vehicle is parked.
		const slot = this.slots.find((slot) => slot.vehicle === vehicle)

		if (slot) {
			// Unpark the vehicle.
			slot.occupied = false
			slot.vehicle = null

			return true
		} else {
			// The vehicle is not parked in the parking lot.
			return false
		}
	}

	getParkingSlotByLicensePlateNumber(licensePlateNumber) {
		// Iterate over the slots and find the slot that contains the vehicle with the given license plate number.
		for (const slot of this.slots) {
			if (
				slot.vehicle &&
				slot.vehicle.licensePlateNumber === licensePlateNumber
			) {
				return slot
			}
		}

		// The vehicle is not parked in the parking lot.
		return null
	}

	calculateParkingFee(vehicle) {
		// Calculate the parking fee based on the vehicle type and the parking duration.

		return parkingFee
	}

	getOccupancy() {
		// Calculate the percentage of parking slots that are occupied.

		const occupiedSlots = this.slots.filter((slot) => slot.occupied).length
		const totalSlots = this.slots.length

		return (occupiedSlots / totalSlots) * 100
	}
}

const lot = new ParkingLot([])
const v1 = new Vehicle('bike', 1, '12:10')
const sl1 = new ParkingSlot('1a', 'bike', 'false', 'pulsar')

lot.addSlot(sl1)
lot.park(v1)

console.log(lot)
