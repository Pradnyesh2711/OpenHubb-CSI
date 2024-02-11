import React from 'react';
import { useState,useEffect} from 'react';
import qs from 'qs';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage';
import Navigation from './Components/Navigation';
import Contribute from './Pages/Contribute/Contribute';
import HomePage from './Pages/HomePage/HomePage';
import Profile from './Pages/Profile/Profile';
import Issues from './Pages/Issues/Issues';
import App1 from './Pages/Comment/comment'
import Chatbot from './Pages/Chatbot/Chatbot';
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard';
function App() {
const[isLogin,setLogin]=useState(false)


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={LandingPage}/>
          <Route path='/home' Component={HomePage}/>
          <Route path='/contribute' Component={Contribute}/>
          <Route path='/profile' Component={Profile}/>
          <Route path='/issues' Component={Issues}/>
          <Route path='/app' Component={App1}/>
          <Route path='/chatbot' Component={Chatbot} />
          <Route path='/leaderboard' Component={LeaderBoard} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


