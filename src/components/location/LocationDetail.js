import React, { useState, useEffect } from 'react';
import { getLocationById } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useHistory, useParams } from "react-router-dom"
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
          location: location.location,
          hours: location.hours
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
      {/* What's up with the question mark???? See below.*/}
      <div className="location__location">Hours: {location.hours}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
    </section>
  );

}