import React, { useEffect, useState } from 'react'
import Login from './compoents/Login'
import Navbar from './compoents/Navbar'
import Footer from './compoents/Footer'
import User from './compoents/User'
import Fixture from './compoents/Fixture';
import { Route,Routes } from 'react-router-dom'
import { ContextProvider } from './compoents/contextProvider'
import UserDataForm from './compoents/UserDataForm'





const App = () => {
  const [state,setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const stateSetter = (state)=>{
    setState(state)
    console.log("state in App.jsx",state);
  }
  return (
    
    <ContextProvider value={state} >
    <div className='bg-blue-200 w-screen h-screen' >
      <Navbar/>
    <Routes>
      <Route path="/" element={<Login stateSetter={stateSetter} />} >
        
      <Route path='/userDataForm' element={<UserDataForm/>} />
      </Route>
      <Route path="/fixtures" element={<Fixture />} />
      <Route path='/userProfile' element={<User/>}/>
    </Routes>
    </div>
    </ContextProvider>

    
  )
}

export default App