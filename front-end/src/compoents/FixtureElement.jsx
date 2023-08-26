import React from 'react';

const FixtureElement = (props) => {
  return (
    <div className="bg-gray-100 rounded-md p-4   shadow-md mb-4">
      <span className="font-bold text-lg">{props.homeTeam}</span>
      <span className="mx-2">vs</span>
      <span className="font-bold text-lg">{props.awayTeam}</span>
      <span className=' pl-10 text-sm' >Home Team {props.homeTeam}</span>
      <div className="mt-2 flex justify-between">
      </div>
    </div>
  );
};

export default FixtureElement;
