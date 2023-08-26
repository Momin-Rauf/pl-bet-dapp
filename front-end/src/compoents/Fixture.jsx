import React, { useEffect, useState } from 'react'
import { UserContext } from './contextProvider';
import { useContext } from 'react';
import FixtureElement from './FixtureElement';

const Fixture = () => {

  const [fixtures,setFixtures] = useState([]);
  const state = useContext(UserContext);
  
  useEffect(()=>{
    const FetchDataFromEtherium = async()=>{
      const {contract} = state;
    const fixArray = [];
    let index;
    for(index=0;index<=5;index++){
      
      let ehteriumData = await contract.fixtures(index);
      fixArray.push({
        side1:ehteriumData.side1,
        side2:ehteriumData.side2,
        id:ehteriumData.id,
      });
    }
    setFixtures(fixArray);
  }
  FetchDataFromEtherium();
},[]);

console.log(fixtures);
    return (
      <div className='absolute top-24 h-screen w-full' >
        {
        fixtures.map((fix)=>(
          <FixtureElement
            key={fix.id}
            homeTeam={fix.side1}
            awayTeam={fix.side2}
          
          />
        ))
      }
      </div>
    
  )
}

export default Fixture