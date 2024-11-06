// App.js
import React from 'react';

import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
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
        <Route path="/" element={<Navigate to="/upskill" />} />
        <Route path={"/upskill"} element={<Upskill/>}/>
        <Route path={"/dashboard"} element={<Temp/>}/>
        <Route path={"/learn"} element={<Temp/>}/>
        <Route path={"/forums"} element={<Temp/>}/>
        <Route path={"/contest"} element={<Temp/>}/>
        <Route path={"/leaderboard"} element={<Temp/>}/>
      </Routes>
      </div>
     
      </BrowserRouter>
  );
}

export default App;
