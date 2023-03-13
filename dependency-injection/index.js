class Person {
    constructor(name){
        this.name = name
        this.address = null
    }

    addAddress(address){
        this.address = address
    }
}

class Address {
    constructor(city, state) {
        this.city = city
        this.state = state
    }
}

const address = new Address('city 1', 'state 1')
const person = new Person('person 1')

person.addAddress(address)

console.log(person.address.city)
address.city = 'city 2'

console.log(person.address.city)