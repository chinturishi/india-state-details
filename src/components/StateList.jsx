import React, { useEffect, useState } from 'react'
import StateCard from './StateCard';
import { stateList } from '../../stateData';

const StateList = () => {
    const[states,setStates]=useState([]);
    useEffect(()=>{
        setStates(stateList);
    },[]);
  return (
    <div className="countries-container">
      {
        states
        .map((state) => {
          console.log(state);
          return (
            <StateCard
            name={state.name}
            chiefMinister={state.ministries.Chief_Minister}
            homeMinister={state.ministries.Home_Minister}
            financeMinister={state.ministries.Finance_Minister}
            educationMinister={state.ministries.Education_Minister}
            />
          );
        })
      }
    </div>
  )
}

export default StateList