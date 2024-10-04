import React from "react";
import { Link } from "react-router-dom";


 StateCard = ({
  name,
  chiefMinister,
  homeMinister,
  financeMinister,
  educationMinister,
}) => {
  return (
    <div className="country-card">
      <Link>
        <img src={`src/assets/${name}.png`} />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Chief Minister: </b>
            {chiefMinister}
          </p>
          <p>
            <b>Education Minister: </b>{educationMinister}
          </p>
          <p>
            <b>Home Minister: </b>{homeMinister}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default StateCard;
