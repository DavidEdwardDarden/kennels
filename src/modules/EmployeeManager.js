const remoteURL = "http://localhost:5002"
// import {handleDeleteemployee} from "../components/employee/EmployeeList"

  export const getEmployeeById = (employeeID) => {
    //be sure your employees have good data and related to a location and customer
   return fetch(`${remoteURL}/employees/${employeeID}?_expand=location&_expand=customer`)
    .then(res => res.json())
  }

  export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
    .then(res => res.json())
  }

  export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }