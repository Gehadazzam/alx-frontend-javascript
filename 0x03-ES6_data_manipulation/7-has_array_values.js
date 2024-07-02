// Create a function named hasValuesFromArray that returns
// a boolean if all the elements in the array exist within the set.
function hasValuesFromArray(set, array) {
  // It accepts two arguments: a set(Set) and an array(Array).
  return array.every((element) => set.has(element));
}

export default hasValuesFromArray;
