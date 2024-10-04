import React, { useEffect, useState } from "react";
import StateCard from "./StateCard";
import { stateList } from "../../stateData";

const StateList = () => {
  const [states, setStates] = useState([]);
  useEffect(() => {
    setStates(stateList);
  }, []);
  return (
    <div className="countries-container">
      {states.map((state) => {
        console.log(state);
        return (
          <StateCard
            name={state.name}
            chiefMinister={state.ministries.chief_minister}
            homeMinister={state.ministries.home_minister}
            financeMinister={state.ministries.finance_minister}
            //educationMinister={state.ministries.Education_Minister}
            image={state.image}
            stateDetail={state}
          />
        );
      })}
    </div>
  );
};

export default StateList;
