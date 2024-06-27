// Import Building from 5 - building.js.
import Building from './5-building';
// Implement a class named SkyHighBuilding that extends from Building:
class SkyHighBuilding extends Building {
// Constructor attributes:
// sqft(Number)(must be assigned to the parent class Building)
// floors(Number)
// Each attribute must be stored in an “underscore” attribute version(ex: name is stored in _name)
  constructor(sqft, floors) {
    super(sqft);
    if (floors !== Number) throw new Error();
    this._floors = floors;
  }

  // Implement a getter for each attribute.
  get floors() {
    return this._floors;
  }

  // Override the method named evacuationWarningMessage and return the following string Evacuate
  // slowly the NUMBER_OF_FLOORS floors
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
