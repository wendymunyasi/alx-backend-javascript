/**
 * Calculates the sum of all student IDs in a list of students.
 *
 * @param {Array} students - The list of students to process
 * @return {number} The sum of all student IDs
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
