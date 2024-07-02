// Create a function named createInt8TypedArray that
// returns a new ArrayBuffer with an Int8 value at a specific position.
function createInt8TypedArray(length, position, value) {
  // It should accept three arguments: length(Number), position(Number),
  // and value(Number).
  // If adding the value is not possible the error Position outside range should be thrown.
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return view;
}

export default createInt8TypedArray;
