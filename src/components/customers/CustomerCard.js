import React from "react"
import "./Customer.css"

export const CustomerCard = ({customer, handleDeleteCustomer}) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Unsave</button>
    </section>
)

