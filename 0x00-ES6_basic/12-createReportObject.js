export default function createReportObject(employeesList) {
  // Return an object with the allEmployees object and a method to get th
  // number of departments
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      // Return no of keys in the allEmployees object (which represents the
      // number of departments)
      return Object.keys(employeesList).length;
    },
  };
}
