import React from "react"
import "./Animal.css"
import { Link, useHistory } from "react-router-dom"

// const history = useHistory();

export const AnimalCard = ({ animal, handleDeleteAnimal }) => (
    <section className="animal">
        <img src={require('./dog.svg').default}></img>
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
        <Link to={`/animals/${animal.id}/edit`}>
            <button>Edit</button>
        </Link>
        <Link to={`/animals/${animal.id}`}>
            <button>Details</button>
        </Link>
    </section>
)