import React from 'react';
import { Link } from "react-router-dom"
import './Card.css';

function Card(props) {
  const { data } = props;
  const countries = data?.Countries.map((country,index) => <span className="comma" key={index}>{country?.CountryName}</span>)

  return (
    <div className="card">
      <Link to={ `/${data?.ProjectsID}`}>
        <img 
          src={`https://www.greenclimate.fund/sites/default/files/styles/fullbleed/public/project/image-${data?.ApprovedRef.toLowerCase()}.jpg`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "https://www.greenclimate.fund/sites/all/themes/gcf/img/logo-globe.png";
            currentTarget.className = "default"
          }}
        />
        <div className="content">
          <h2 className="country-list">{countries}</h2>
          <p>{data?.ProjectName}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;