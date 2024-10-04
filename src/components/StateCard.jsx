import React from "react";
import { Link } from "react-router-dom";

const StateCard = ({
  name,
  chiefMinister,
  homeMinister,
  financeMinister,
  //educationMinister,
  image,
  stateDetail,
}) => {
  return (
    <div className="country-card">
      <Link to={`/${name}`} state={stateDetail}>
        <img src={image} />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Chief Minister: </b>
            {chiefMinister}
          </p>
          <p>
            <b>Finace Minister: </b>
            {financeMinister}
          </p>
          <p>
            <b>Home Minister: </b>
            {homeMinister}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default StateCard;
