// Implement a class named HolbertonClass:
class HolbertonClass {
// Constructor attributes:
// size(Number)
// location(String)
// Each attribute must be stored in an “underscore” attribute
// version(ex: name is stored in _name)
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // When the class is cast into a Number, it should return the size.
  // When the class is cast into a String, it should return the location.
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}

export default HolbertonClass;
