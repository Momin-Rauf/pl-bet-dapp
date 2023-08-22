import React, { useEffect, useState } from 'react';
import FixtureElement from './FixtureElement.jsx';
import Bet from './bet.jsx';
import { useContext } from 'react';
import { UserContext } from './contextProvider.jsx'; // Correct import path

const Fixture = () => {
  const state = useContext(UserContext); // Use the UserContext here
  console.log("context value in Fixture:", state);
  const {contract} = state;
  const [fixtures, setFixtures] = useState([]);
  
  useEffect(() => {
    const getFixtures = async () => {
      try {
        const response = await fetch('https://bet-app-5dfae-default-rtdb.firebaseio.com/fixtures.json');
        if (!response.ok) {
          throw new Error('Failed to fetch fixtures data');
        }
        const data = await response.json();

        const loadedData = [];
        for (const key in data) {
          loadedData.push({
            id: data[key].id,
            awayTeam: data[key].awayTeam,
            date: data[key].date,
            homeTeam: data[key].homeTeam,
            time: data[key].time,
          });
        }

        setFixtures(loadedData);
      } catch (error) {
        console.error('Error fetching fixtures data:', error);
      }
    };

    getFixtures();
  }, []);

  useEffect(() => {
    
  const sport="football"
    const addFixturesToBlockchain = async () => {
      try {
        if (state.contract) { // Check if contract is not null
          for (const fix of fixtures) {
            const awayTeam = fix.awayTeam;
            const homeTeam = fix.homeTeam;
  
            await state.contract.addFixture(homeTeam, awayTeam, sport);
  
            console.log(`Fixture added for ${homeTeam} vs ${awayTeam}`);
          }
        }
      } catch (error) {
        console.error('Error adding fixtures to blockchain:', error);
      }
    };
  
    addFixturesToBlockchain();
  }, [fixtures, state.contract]);

  return (
    <div>
      <Bet/>
      {fixtures.map((fix) => (
        <FixtureElement
          key={fix.id}
          awayTeam={fix.awayTeam}
          homeTeam={fix.homeTeam}
          time={fix.time}
          date={fix.date}
        />
      ))}
    </div>
  );
};

export default Fixture;

