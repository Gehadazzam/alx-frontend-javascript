export default function appendToEachArrayValue (array, appendString) {
  const appendedArray = array;
  for (const val of array) {
    const idx = array.indexOf(val);
    appendedArray[idx] = appendString + val;
  }
  return array;
}
