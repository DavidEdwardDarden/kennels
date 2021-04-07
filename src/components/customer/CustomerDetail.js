import React, { useHistory, useState, useEffect } from 'react';
import { getCustomerById } from '../../modules/CustomerManager';
import './CustomerDetail.css';
import { useParams } from "react-router-dom"
import { deleteCustomer} from "../../modules/CustomerManager"

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {customerId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getCustomerById(id) from CustomerManager and hang on to the data; put it into state
    console.log("useEffect", customerId)
    getCustomerById(customerId)
      .then(customer => {
        setCustomer({
          name: customer.name,
          breed: customer.breed,
          location: customer.location,
          customer: customer.customer
        });
        setIsLoading(false);
      });
  }, [customerId]);

  const handleDelete = () => {
    //invoke the delete function in CustomerManger and re-direct to the customer list.
    setIsLoading(true);
    deleteCustomer(customerId).then(() =>
      history.push("/customers")
    );
  };

  return (
    <section className="customer">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer__breed">{customer.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="customer__location">Location: {customer.location?.name}</div>
      <div className="customer__owner">Customer: {customer.customer?.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
    </section>
  );

}