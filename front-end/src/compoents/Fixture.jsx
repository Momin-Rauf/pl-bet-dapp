import React, { useEffect, useState } from 'react'
import { UserContext } from './contextProvider';
import { useContext } from 'react';
import FixtureElement from './FixtureElement';
import Bet from './Bet';
import SimulateMatch from './simulate';
import AdminAddFxiture from './AdminAddFixutre';

const Fixture = (props) => {
  const DeployerAddress = '0xF869A5A921473c1d4e91b6611C7a8F8322D954d2';
  const [side,setSide] = useState();
  const [optionID,setOptionCheck] = useState({option:0,id:-1});
  const [fixtures,setFixtures] = useState([]);
  const state = useContext(UserContext);
  console.log(0)
 
  useEffect(()=>{
 
  
  const callFixtures = async()=>{
    let index = 1;
    const {contract} = state;
    const fixtures1 = [];
    
    while(index<=3){
      
      const fixtureData = await contract.fixtures(index);
      fixtures1.push({
        side1:fixtureData.side1,
        side2:fixtureData.side2,
        id:fixtureData.id,
      });
      
      
      index++;
    }
    setFixtures(fixtures1);
  }
  callFixtures();
},[]);


return (
      <>
      <div className='flex mb-5 absolute top-24 flex-col h-screen gap-4' >
      <div className='w-full flex flex-row items-align gap-10  justify-between' ><div className=' w-full p-3 h-56 overflow-hidden overflow-y-auto' style={{ maxHeight: 'calc(100vh - 6rem)' }}>
  {
    fixtures.map((fix) => (
      <FixtureElement
        key={fix.id}
        id={fix.id}
        homeTeam={fix.side1}
        awayTeam={fix.side2}
        setSide={setSide}
        optionChange={setOptionCheck}
      />
    ))
  }
</div>
      <Bet side={side} optionID={optionID} />
      { DeployerAddress.toLowerCase()===props.address.toLowerCase() ? <SimulateMatch fixData = {fixtures}/>:null}
      </div>
      {DeployerAddress.toLowerCase() === props.address.toLowerCase()? <AdminAddFxiture/>:null}
      </div>

      </>
    
  )
}

export default Fixture;
