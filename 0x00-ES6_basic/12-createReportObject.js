export default function createReportObject(employeesList) {
  // Create an empty object to store the employees by department
  const allEmployees = {};

  // Iterate over the employeesList array
  for (const employee of employeesList) {
    // Destructure the department and name properties from the employee object
    const { department, name } = employee;
    if (!allEmployees[department]) {
      allEmployees[department] = [];
    }
    allEmployees[department].push(name);
  }
  // Return an object with the allEmployees object and a method to get the number of departments
  return {
    allEmployees,
    getNumberOfDepartments() {
      // Return no of keys in the allEmployees object (which represents the number of departments)
      return Object.keys(this.allEmployees).length;
    },
  };
}
