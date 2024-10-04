import React from 'react'
import { useLocation } from 'react-router-dom';

const StateDetail = () => {
  const { state } = useLocation();
  return (
    <main >
    <div className="country-details-container">
      <Link className="back-button" to="/" onClick={()=>(history.back())}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </Link>
      <div className="country-details">
        <img src={`src/assets/${name}.png`} alt={countryData.flagAlt} />
        <div className="details-text-container">
          <h1>{countryData.name}</h1>
          <div className="details-text">
            <p>
              <b>Native Name: {countryData.nativeName} </b>
              <span className="native-name"></span>
            </p>
            <p>
              <b>
                Population: {countryData.population.toLocaleString("en-IN")}
              </b>
              <span className="population"></span>
            </p>
            <p>
              <b>Region: {countryData.region}</b>
              <span className="region"></span>
            </p>
            <p>
              <b>Sub Region: {countryData.subregion}</b>
              <span className="sub-region"></span>
            </p>
            <p>
              <b>Capital: {countryData.capital}</b>
              <span className="capital"></span>
            </p>
            <p>
              <b>Top Level Domain: {countryData.topLevelDomain}</b>
              <span className="top-level-domain"></span>
            </p>
            <p>
              <b>Currencies: {countryData.currencies}</b>
              <span className="currencies"></span>
            </p>
            <p>
              <b>Languages: {countryData.languages}</b>
              <span className="languages"></span>
            </p>
          </div>
          {countryData.borders.length !== 0 && (
            <div className="border-countries">
              <b>
                Border Countries:{" "}
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </b>
              &nbsp;
            </div>
          )}
        </div>
      </div>
    </div>
  </main>
  )
}

export default StateDetail