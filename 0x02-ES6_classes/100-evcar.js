// Import Car from 10 - car.js.
import Car from './10-car';
// Implement a class named EVCar that extends the Car class:
export default class EVCar extends Car {
// Constructor attributes:
// brand(String)
// motor(String)
// color(String)
// range(String)
  constructor(brand, motor, color, range) {
    // Each attribute must be stored in an “underscore” attribute version(name is stored in _name)
    super(brand, motor, color);
    this._range = range;
  }

  // For privacy reasons, when cloneCar is called on a EVCar object, the object returned
  // should be an instance of Car instead of EVCar.
  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
