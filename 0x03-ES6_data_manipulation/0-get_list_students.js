function getListStudents() {
// returns an array of objects.

  // Each object should have three attributes: id(Number), firstName(String), and location(String).

  // The array contains the following students in order:
  const students = [];
  //     Guillaume, id: 1, in San Francisco

  students.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });

  //     James, id: 2, in Columbia

  students.push({ id: 2, firstName: 'James', location: 'Columbia' });
  //     Serena, id: 5, in San Francisco

  students.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });
  return students;
}

export default getListStudents;
