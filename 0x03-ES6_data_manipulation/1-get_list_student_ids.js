// Create a function getListStudentIds that returns an array of ids from a list of object.
function getListStudentIds(students) {
// This function is taking one argument which is an array of objects -
// and this array is the same format as getListStudents from the previous task.

  // If the argument is not an array, the function is returning an empty array.
  if (!Array.isArray(students)) {
    return [];
  }
  // You must use the map function on the array.
  return students.map((student) => student.id);
}

export default getListStudentIds;
