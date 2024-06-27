// Implement a class named Car:
class Car {
// Constructor attributes:
// brand(String)
// motor(String)
// color(String)
// Each attribute must be stored in an “underscore”
// attribute version(ex: name is stored in _name)
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Add a method named cloneCar.This method should
  // return a new object of the class.
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}

export default Car;
