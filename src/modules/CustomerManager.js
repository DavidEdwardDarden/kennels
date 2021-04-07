const remoteURL = "http://localhost:5002"
// import {handleDeleteCustomer} from "../components/customer/customerList"

  export const getCustomerById = (customerID) => {
    //be sure your customers have good data and related to a location and customer
   return fetch(`${remoteURL}/customers/${customerID}?_expand=location&_expand=customer`)
    .then(res => res.json())
  }

  export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(res => res.json())
  }

  export const deleteCustomer = (id) => {
    return fetch(`${remoteURL}/customers/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }