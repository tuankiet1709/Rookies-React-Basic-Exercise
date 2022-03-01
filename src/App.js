import './App.css';
import React from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar"

function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <Home bootcamp="Rookies"/>
    </React.Fragment>
  );
}

export default App;
