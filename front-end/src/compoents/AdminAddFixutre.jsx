import { useState } from 'react';
import { UserContext } from './contextProvider';
import { useContext } from 'react';

const AdminAddFxiture = () => {
  const state = useContext(UserContext);
  const [Awayteam, setAwayTeam] = useState('');
  const [Hometeam, setHomeTeam] = useState('');

  const SubmitData = async (event) => {
    const { contract } = state;
    event.preventDefault();
    let sports = 'Football';
    const inputData = await contract.addFixture(Hometeam, Awayteam, sports);
    setAwayTeam('');
    setHomeTeam('');
  };
  return (
    <>
      
      <form
        className='left-4 sm:top-8 sm:left-8 bg-white p-4 shadow-md rounded-md'
        onSubmit={SubmitData}
      >
        <input
          type='text'
          placeholder='Home team'
          value={Hometeam}
          onChange={(event) => setHomeTeam(event.target.value)}
          className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
        />
        <input
          type='text'
          placeholder='Away team'
          value={Awayteam}
          onChange={(event) => setAwayTeam(event.target.value)}
          className='w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
        />
        <button
          type='submit'
          className='mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AdminAddFxiture;
