// Create a function getStudentIdsSum that returns the sum of all the student ids.
function getStudentIdsSum(students){
// It should accept a list of students(from getListStudents) as a parameter.
// You must use the reduce function on the array.
    return students.reduce((sum, student) => sum + student.id, 0);
}
export default getStudentIdsSum;