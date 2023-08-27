import React from 'react';

const FixtureElement = (props) => {



  return (
    <div className="bg-gray-100  rounded-md p-4   shadow-md mb-4">
      <span onClick={()=>{ props.optionChange({option:1,id:props.id});
        props.setSide(props.homeTeam)}} className="font-bold hover:text-blue-800 focus:text-blue-900 text-lg">{props.homeTeam}</span>
      <span className="mx-2">vs</span>
      <span className="font-bold hover:text-blue-800 focus:text-blue-900 text-lg" onClick={()=>{props.setSide(props.awayTeam); props.optionChange({option:2,id:props.id}) }} >{props.awayTeam}</span>
      <span className= 'pl-10 text-sm'  >Click on the team you want to select</span>
      <div className="mt-2 flex justify-between">
      </div>
    </div>
  );
};

export default FixtureElement;
