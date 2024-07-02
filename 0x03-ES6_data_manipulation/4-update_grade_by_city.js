// Create a function updateStudentGradeByCity that returns an array
// of students for a specific city with their new grade
function updateStudentGradeByCity(students, city, newGrades) {
// It should accept a list of students(from getListStudents), a city(String),
// and newGrades(Array of “grade” objects) as parameters.

  // newGrades is an array of objects with this format:

  // {
  //     studentId: 31,
  //         grade: 78,
  //   }
  // If a student doesn’t have grade in newGrades, the final grade should be N / A.

  // You must use filter and map combined.
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
