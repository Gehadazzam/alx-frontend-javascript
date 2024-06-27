class Currency {
  //  Constructor attributes:
//   code(String)
//   name(String)
// Each attribute must be stored in an “underscore” attribute version(ex: name is stored in _name)
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  // Implement a getter and setter for each attribute.
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value!== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value!== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Implement a method named displayFullCurrency that will return the attributes
  // in the following format name(code).
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
export default Currency;
