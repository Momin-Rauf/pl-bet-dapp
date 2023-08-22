import React, { useState, useRef } from 'react';

const Bet = () => {
    const [bet, setBet] = useState(0.0);
    const [valid, setValid] = useState(false);
    const inputRef = useRef(null);

    const handleSetBet = () => {
        const inputValue = parseFloat(inputRef.current.value);
        
        if (inputValue >= 0.3 && inputValue <= 1) {
            setValid(false);
            setBet(inputValue);
            console.log(bet);
        } else {
            setValid(true);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Place Your Bet</h2>
            <label className="block text-gray-600 mb-2" htmlFor="">Put your bet between 0.3 to 1 ETH</label>
            <div className="flex">
                <input
                    ref={inputRef}
                    type="number"
                    step="0.01"
                    className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Write your bet here!"
                />
                <button
                    onClick={handleSetBet}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-lg"
                >
                    Set Bet
                </button>
            </div>
            {valid && (
                <div
                    className="text-red-500 mt-2 cursor-pointer hover:underline"
                    onClick={() => setValid(false)}
                >
                    Please enter a value between 0.3 and 1 ETH.
                </div>
            )}
        </div>
    );
};

export default Bet;
