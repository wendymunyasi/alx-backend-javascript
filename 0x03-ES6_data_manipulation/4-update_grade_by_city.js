/**
 * Updates the grades of students in a given city with new grades.
 *
 * If a student doesn’t have grade in newGrades, the final grade
 * should be N/A.
 *
 * @param {Array} students - The list of students to process
 * @param {string} city - The city to filter students by
 * @param {Array} newGrades - The list of new grades to use for updating
 * @return {Array} The updated list of students
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Default grade value if no grade is found for a student
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      // Filter the students by city and update their grades
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        // Find the corresponding new grade for this student
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
