export default function createEmployeesObject (departmentName, employees) {
  const departmentNameObj = {
    [departmentName]: [...employees]
  };
  return departmentNameObj;
}
