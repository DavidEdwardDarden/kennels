import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerList } from "./customer/CustomerList"
import { CustomerDetail } from "./customer/CustomerDetail"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalForm } from './animal/AnimalForm'
import { AnimalEditForm } from './animal/AnimalEditForm'
import { Register } from "../components/auth/Register"
import { Login } from "../components/auth/Login"

const isAuthenticated = () => sessionStorage.getItem("kennel_customer") !== null;

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                if(isAuthenticated()) {
                    <AnimalList />
                }else {
                    <Redirect to="/login" />
                }
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

            <Route exact path="/animals/:animalId(\d+)/edit">
                <AnimalEditForm />
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
                <Redirect to="/login" />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            {/* <Route path="/customers/:customerId(\d+)">
                <CustomerDetail />
            </Route> */}

            <Route path="/employees/:employeeId(\d+)">
                <EmployeeDetail />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            {/*
            This is a new route to handle a URL with the following pattern:
            http://localhost:3000/animals/1

            It will not handle the following URL because the `(\d+)`
            matches only numbers after the final slash in the URL
            http://localhost:3000/animals/jack
            */}

        </>
    )
}



