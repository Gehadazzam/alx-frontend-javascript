/**
 * Cleans a set of strings by removing a specified starting string from each element.
 *
 * @param {Set<string>} set - The set of strings to clean.
 * @param {string} startString - The starting string to remove from each element.
 * @returns {string} - A string of cleaned elements separated by '-'.
 * @throws {Error} - Throws an error if the startString is not a string.
 */
function cleanSet(set, startString) {
  if (startString === '') return '';

  if (typeof startString !== 'string') {
    throw new Error('startString must be a string');
  }

  const result = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}

export default cleanSet;
