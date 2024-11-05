// App.js
import React from 'react';
import Homepage from './components/homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Temp from './components/Temp';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Upskill from './components/Upskill';

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <div className='flex flex-row gap-2'>
      <Sidebar/>
      <Routes>
        <Route path={"/upskill"} element={<Upskill/>}/>
        <Route path={"/dashboard"} element={<Temp/>}/>
        <Route path={"/learn"} element={<Temp/>}/>
        <Route path={"/forums"} element={<Temp/>}/>
        <Route path={"/contest"} element={<Temp/>}/>
        <Route path={"/leaderboard"} element={<Temp/>}/>
      </Routes>
      </div>
      {/* <Homepage/> */}
      </BrowserRouter>
  );
}

export default App;
