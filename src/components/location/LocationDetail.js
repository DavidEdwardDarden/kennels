import React, { useHistory, useState, useEffect } from 'react';
import { getLocationById } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams } from "react-router-dom"
import { deleteLocation } from "../../modules/LocationManager"

export const LocationDetail = () => {
  const [location, setlocation] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {locationId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getlocationById(id) from locationManager and hang on to the data; put it into state
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setlocation({
          name: location.name,
          breed: location.breed,
          location: location.location,
          customer: location.customer
        });
        setIsLoading(false);
      });
  }, [locationId]);

  const handleDelete = () => {
    //invoke the delete function in locationManger and re-direct to the location list.
    setIsLoading(true);
    deleteLocation(locationId).then(() =>
      history.push("/locations")
    );
  };

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__breed">{location.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="location__location">Location: {location.location?.name}</div>
      <div className="location__owner">Customer: {location.customer?.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
    </section>
  );

}