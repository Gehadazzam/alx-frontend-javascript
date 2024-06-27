import Currency from './3-currency';
// Implement a class named Pricing:
class Pricing {
  constructor(amount, currency) {
    // Constructor attributes:
    // amount(Number)
    // currency(Currency)
    // Each attribute must be stored in an “underscore” attribute version(name is stored in _name)
    this._amount = amount;
    this._currency = currency;
  }

  // Implement a getter and setter for each attribute.
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  // Implement a method named displayFullPrice that returns the attributes
  // in the following format amount currency_name(currency_code).
  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  // Implement a static method named convertPrice.It should a
  // ccept two arguments: amount(Number),
  // conversionRate(Number).The function should return the amount multiplied by the conversion rate.
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
