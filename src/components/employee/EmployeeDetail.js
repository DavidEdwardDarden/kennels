import React, { useState, useEffect } from 'react';
import { getEmployeeById } from '../../modules/EmployeeManager';
import './EmployeeDetail.css';
import { useHistory, useParams } from "react-router-dom"
import { deleteEmployee } from "../../modules/EmployeeManager"

export const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {employeeId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getEmployeeById(id) from EmployeeManager and hang on to the data; put it into state
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          breed: employee.breed,
          location: employee.location,
          customer: employee.customer
        });
        setIsLoading(false);
      });
  }, [employeeId]);

  const handleDelete = () => {
    //invoke the delete function in EmployeeManger and re-direct to the employee list.
    setIsLoading(true);
    deleteEmployee(employeeId).then(() =>
      history.push("/employees")
    );
  };

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__breed">{employee.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="employee__location">Location: {employee.location?.name}</div>
      {/* <div className="employee__owner">Customer: {employee.customer?.name}</div> */}
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
    </section>
  );

}