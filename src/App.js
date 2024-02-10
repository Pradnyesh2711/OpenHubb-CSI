import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage';
import Navigation from './Components/Navigation';
import Contribute from './Pages/Contribute/Contribute';
import HomePage from './Pages/HomePage/HomePage';
import Profile from './Pages/Profile/Profile';
import Issues from './Pages/Issues/Issues';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' Component={LandingPage}/>
          <Route path='/home' Component={HomePage}/>
          <Route path='/contribute' Component={Contribute}/>
          <Route path='/profile' Component={Profile} />
          <Route path='/issues' Component={Issues} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
