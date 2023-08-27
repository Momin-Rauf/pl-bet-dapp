import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from './contextProvider';

const SimulateMatch = (props) => {
    const state = useContext(UserContext);
    const [result, setResult] = useState(-1);
    const [homeGoals, setHomeGoals] = useState(0);
    const [awayGoals, setAwayGoals] = useState(0);
    const [isMatchSimulated, setIsMatchSimulated] = useState(false);

    const simulateMatch = () => {
        const simulatedHomeGoals = Math.floor(Math.random() * 5); // Random home goals between 0 and 4
        const simulatedAwayGoals = Math.floor(Math.random() * 5); // Random away goals between 0 and 4

        setHomeGoals(simulatedHomeGoals);
        setAwayGoals(simulatedAwayGoals);
        setIsMatchSimulated(true);
        console.log(props.fixData);
    };

    useEffect(() => {
        if (isMatchSimulated) {
            if (homeGoals > awayGoals) {
                setResult(1);
                console.log(result);
            } else if (awayGoals > homeGoals) {
                setResult(2);
                
                console.log(result);
            } else {
                setResult(3);
                
                console.log(result);
            }

        }
    }, [isMatchSimulated, homeGoals, awayGoals]);

    const endFixture = async () => {
        const { contract } = state;

        // console.log("Fixtures:",fixtures ); // Check the value of fixtures array

            const fixtures = props.fixData;
            const id = fixtures[2].id;
            console.log(fixtures[2]);
            console.log("Fixture ID:", id); // Check the value of fixture id
            const resultAuto = await contract.endFixture(id, result,{ gasLimit: 200000 });
            await resultAuto.wait();
            console.log("Fixture ended");
        
    };

    return (
        <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Simulate Football Match</h2>

            {isMatchSimulated ? (
                <div className="mb-4">
                    <p className="text-lg">
                        Home Team: {homeGoals} - Away Team: {awayGoals}
                    </p>
                    <p className="text-lg font-semibold">{/* Display result here */}</p>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        onClick={endFixture}
                    >
                        End Fixture
                    </button>
                </div>
            ) : (
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={simulateMatch}
                >
                    Simulate Match
                </button>
            )}
        </div>
    );
};

export default SimulateMatch;
