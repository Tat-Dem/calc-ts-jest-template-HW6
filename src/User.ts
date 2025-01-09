export class User {
    name: string
    lastName: string
    phoneNumber: string
    address: string
    age: number
    consentGiven: boolean
    constructor(name: string, lastName: string, phoneNumber: string, address: string, age: number ) {
        this.name = name
        this.lastName = lastName
        this.phoneNumber = phoneNumber
        this.address = address
        this.age = age
        this.consentGiven = false;
    }
}