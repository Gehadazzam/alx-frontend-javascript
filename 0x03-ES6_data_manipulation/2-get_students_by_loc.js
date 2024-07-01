// Create a function getStudentsByLocation that returns an array of
// objects who are located in a specific city.
function getStudentsByLocation(students, city) {
// It should accept a list of students(from getListStudents) and a city(string) as parameters.
  return students.filter((student) => student.location === city);
  // You must use the filter function on the array.
}

export default getStudentsByLocation;
