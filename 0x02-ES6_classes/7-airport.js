// Implement a class named Airport:
class Airport {
// Constructor attributes:
// name(String)
// code(String)
// Each attribute must be stored in an “underscore” attribute version(ex: name is stored in _name)
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  // The default string description of the class should return
  // the airport code(example below).
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
export default Airport;
