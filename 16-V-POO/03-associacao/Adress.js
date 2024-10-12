class Address {
  constructor(street, number, neightborhood, city, state) {
    this.street = street;
    this.number = number;
    this.neightborhood = neightborhood;
    this.city = city;
    this.state = state;
  }
  fullAddress() {
    return `Rua ${this.street}, n ${this.number}. ${this.neightborhood}, ${this.city}/${this.state}`;
  }
}

module.exports = Address;
