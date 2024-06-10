import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './routes/root.jsx';
import App from './App.jsx';
import Scores from './Scores.jsx';
import Login from './Login.jsx';

export const UserContext = React.createContext();


function First() {
  const [p1 , setp1] = useState({name:'' , score:0})
  const [p2 , setp2] = useState({name:'' , score:0})

  return (
    <UserContext.Provider value={{ p1, setp1, p2, setp2 }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Root/>} />
          <Route path="/tictactoe" element={<App/>} />
          <Route path="/scores" element={<Scores/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        
      </Router>
    </UserContext.Provider>
  );
}

export default First;
